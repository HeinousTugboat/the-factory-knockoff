import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../item.model';

@Component({
  selector: 'app-purchasing',
  templateUrl: './purchasing.component.html',
  styleUrls: ['./purchasing.component.scss']
})
export class PurchasingComponent implements OnInit {
  public items: ItemModel[];
  constructor() { }

  ngOnInit() {
    this.items = ItemModel.init().filter(x => x.buyCost > 0);
  }

}
