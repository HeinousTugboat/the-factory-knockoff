import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ItemModel } from '../../models/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() toSell: number;
  @Input() item: ItemModel;
  @Output() toSellChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
