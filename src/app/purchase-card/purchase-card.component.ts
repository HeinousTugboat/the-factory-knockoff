import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ItemModel } from '../item.model';

@Component({
  selector: 'app-purchase-card',
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.scss']
})
export class PurchaseCardComponent implements OnInit {
  @Input() item: ItemModel;
  @Output() sell = new EventEmitter;
  @Output() purchase = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
}
