import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { ItemModel } from '../../models/item.model';
import { SalesService } from '../../services/sales.service';
import { SaleModel } from '../../models/sale.model';

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.scss']
})
export class SalesCardComponent implements OnInit {
  @Input() sale: SaleModel;
  @Output() saleChange = new EventEmitter;
  constructor(private salesService: SalesService) { }

  ngOnInit() {
  }

  process() {
    this.salesService.processSale(this.sale);
    // TODO: This should definitely be in SaleModel instead of here.
    // if (this.sale.isOpen) {
    //   this.sale.isOpen = false;
    //   this.sale.isSold = true;
    //   this.sale.isComplete = false;
    // } else if (this.sale.isSold) {
    //   this.sale.isOpen = false;
    //   this.sale.isSold = false;
    //   this.sale.isComplete = true;
    // } else {
    //   this.sale.isOpen = false;
    //   this.sale.isSold = false;
    //   this.sale.isComplete = false;
    // }
    // this.saleChange.emit(this.sale);
  }

}
