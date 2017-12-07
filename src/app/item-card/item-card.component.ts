import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from '../item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: ItemModel;

  constructor() { }

  ngOnInit() {
  }

}
