import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../data.service';
import { ItemModel } from '../../item.model';

@Component({
  selector: 'app-purchasing',
  templateUrl: './purchasing.component.html',
  styleUrls: ['./purchasing.component.scss']
})
export class PurchasingComponent implements OnInit, OnDestroy {
  items: ItemModel[];
  private items$: Subscription;
  toPurchase: Map<ItemModel, number> = new Map;
  totals: { buy: number, sell: number, net: number, qty: number | null, buyQty: number, sellQty: number }
    = { buy: 0, sell: 0, net: 0, qty: null, buyQty: 0, sellQty: 0 };
  constructor(private dataService: DataService) { }

  toPurchaseChange(item: ItemModel, amount: number) {
    const qty = this.toPurchase.get(item) || 0;
    console.log('toPurchaseChange', item.current, qty, amount);
    this.toPurchase.set(item, qty + amount + item.current >= 0 ? qty + amount : qty);
    this.updateTotals();
  }

  updateTotals() {
    this.totals = Array.from(this.toPurchase.entries()).reduce((acc, item) => {
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

  purchase(item: ItemModel) {
    item.current++;
    console.log(`buying one! ${item.name} [${item.current}]`);
    this.dataService.update();
  }

  ngOnInit() {
    this.items$ = this.dataService.items$.subscribe(items => {
      this.items = items.filter(x => x.buyPrice > 0);
    });
  }

  ngOnDestroy() {
    this.items$.unsubscribe();
  }

}
