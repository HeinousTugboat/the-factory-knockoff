import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ItemModel } from '../../models/item.model';

@Component({
  selector: 'app-purchase-card',
  templateUrl: './purchase-card.component.html',
  styleUrls: ['./purchase-card.component.scss']
})
export class PurchaseCardComponent implements OnInit {
  @Input() toPurchase: number;
  @Input() item: ItemModel;
  @Output() toPurchaseChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
}
