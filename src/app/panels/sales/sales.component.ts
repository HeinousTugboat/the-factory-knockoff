import { Component, OnInit } from '@angular/core';

import { ItemModel } from '../../models/item.model';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  constructor(public salesService: SalesService) { }
  ngOnInit() { }
}
