import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../services/data.service';
import { ItemModel } from '../../models/item.model';
import { SalesService } from '../../services/sales.service';
import { SaleModel } from '../../models/sale.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
  items: ItemModel[];
  private items$: Subscription;
  toSell: Map<ItemModel, number> = new Map;
  totals: { sell: number, sellQty: number, dur: number }
    = { sell: 0, sellQty: 0, dur: 0 };

  constructor(public dataService: DataService, public salesService: SalesService) { }

  toSellChange(item: ItemModel, amount: number) {
    const qty = this.toSell.get(item) || 0;
    this.toSell.set(item, qty + amount >= item.current
      ? item.current : qty + amount <= 0
        ? 0 : qty + amount);
    this.updateTotals();
  }

  updateTotals() {
    this.totals = Array.from(this.toSell.entries()).reduce((acc, item) => {
      if (item[1] === 0) { return acc; }
      acc.sell += item[1] * item[0].salePrice;
      acc.sellQty += item[1];
      return acc;
    }, { sell: 0, sellQty: 0, dur: SaleModel.calculateDuration(this.toSell) });
  }

  sell() {
    this.updateTotals();
    this.salesService.createSale(this.toSell);

    this.toSell = new Map;
    this.updateTotals();
  }

  ngOnInit() {
    this.items$ = this.dataService.items$.subscribe(items => {
      this.items = items.filter(x => x.current >= 1);
    });
  }

  ngOnDestroy() {
    this.items$.unsubscribe();
  }

}
