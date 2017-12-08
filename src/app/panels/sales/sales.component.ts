import { Component, OnInit } from '@angular/core';

import { ItemModel } from '../../item.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  public items: ItemModel[];
  constructor() { }

  ngOnInit() {
    this.items = ItemModel.init().filter(x => x.buyCost > 0);
  }
}
