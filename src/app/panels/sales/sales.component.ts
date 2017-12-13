import { Component, OnInit } from '@angular/core';

import { ItemModel } from '../../models/item.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  public items: ItemModel[];
  constructor() { }

  ngOnInit() {
    this.items = ItemModel.init().filter(x => x.buyPrice > 0);
  }
}
