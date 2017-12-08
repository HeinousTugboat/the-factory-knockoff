import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ItemModel } from '../item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: ItemModel;
  @Output() removeForSale = new EventEmitter;
  @Output() addForSale = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
