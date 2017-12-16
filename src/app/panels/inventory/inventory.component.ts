import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../services/data.service';
import { ItemModel } from '../../models/item.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
  items: ItemModel[];
  private items$: Subscription;
  toSell: Map<ItemModel, number> = new Map;
  totals: { buy: number, sell: number, net: number, qty: number | null, buyQty: number, sellQty: number }
    = { buy: 0, sell: 0, net: 0, qty: null, buyQty: 0, sellQty: 0 };

  constructor(public dataService: DataService) { }

  toSellChange(item: ItemModel, amount: number) {
    const qty = this.toSell.get(item) || 0;
    // console.log('toPurchaseChange', item.current, qty, amount);
    this.toSell.set(item, qty + amount >= item.current
      ? item.current : qty + amount <= 0
        ? 0 : qty + amount);
    this.updateTotals();
  }

  updateTotals() {
    this.totals = Array.from(this.toSell.entries()).reduce((acc, item) => {
      if (item[1] === 0) { return acc; }
      if (!acc.qty) { acc.qty = 0; }
      if (item[1] > 0) {
        acc.buy -= item[1] * item[0].buyPrice;
        acc.buyQty += item[1];
      }
      if (item[1] < 0) {
        acc.sell -= item[1] * item[0].salePrice;
        acc.sellQty += item[1];
      }
      acc.qty += item[1];
      acc.net = acc.sell + acc.buy;
      return acc;
    }, { buy: 0, sell: 0, net: 0, qty: null, buyQty: 0, sellQty: 0 });
  }

  sell() {
    this.updateTotals();

    for (const [item, qty] of Array.from(this.toSell.entries())) {
      // item.current -= qty;
    }
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
