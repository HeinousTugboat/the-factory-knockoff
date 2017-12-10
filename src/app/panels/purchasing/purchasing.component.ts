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
  totals: { buy: number, sell: number, net: number } = { buy: 0, sell: 0, net: 0 };
  constructor(private dataService: DataService) { }

  increase(item: ItemModel) {
    if (this.toPurchase.has(item)) {
      const qty = this.toPurchase.get(item);
      this.toPurchase.set(item, qty + 1);
    } else {
      this.toPurchase.set(item, 1);
    }
    this.updateTotals();
  }

  decrease(item: ItemModel) {
    if (this.toPurchase.has(item)) {
      const qty = this.toPurchase.get(item);
      this.toPurchase.set(item, qty > item.current ? qty - 1 : qty);
    }
    this.updateTotals();
  }

  updateTotals() {
    this.totals = Array.from(this.toPurchase.entries()).reduce((acc, item) => {
      if (item[1] > 0) {
        acc.buy -= item[1] * item[0].buyPrice;
      }
      if (item[1] < 0) {
        acc.sell += item[1] * item[0].salePrice;
      }
      acc.net = acc.sell + acc.buy;
      return acc;
    }, { buy: 0, sell: 0, net: 0 });
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
