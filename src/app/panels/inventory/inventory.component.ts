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
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items$ = this.dataService.items$.subscribe(items => {
      this.items = items.filter(x => x.current >= 1);
    });
  }

  ngOnDestroy() {
    this.items$.unsubscribe();
  }

}
