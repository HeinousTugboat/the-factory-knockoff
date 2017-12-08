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
  constructor(private dataService: DataService) { }

  increase(item: ItemModel) {
    console.log(item.name+' +1');
  }

  decrease(item: ItemModel) {
    console.log(item.name+' +1');
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
