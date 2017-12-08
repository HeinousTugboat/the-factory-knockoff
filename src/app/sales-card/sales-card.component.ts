import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { ItemModel } from '../item.model';

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.scss']
})
export class SalesCardComponent implements OnInit {
  @Input() item: ItemModel;
  @Output() cancel = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
