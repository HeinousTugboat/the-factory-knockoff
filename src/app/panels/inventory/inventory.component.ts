import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../item.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  items: ItemModel[] = [];
  constructor() { }

  ngOnInit() {
    this.items = ItemModel.init();
  }

}
