import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ItemModel } from '../models/item.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SaleModel } from '../models/sale.model';
import { UpdateService } from './update.service';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';
import { TimeInterval } from 'rxjs/operators/timeInterval';

@Injectable()
export class SalesService {
  private sales: SaleModel[] = [];
  allSales$ = new BehaviorSubject<SaleModel[]>([]);
  openSales$ = this.allSales$.pipe(map((allSales) => allSales.filter(sale => sale.isOpen)));
  soldSales$ = this.allSales$.pipe(map((allSales) => allSales.filter(sale => sale.isSold)));
  completeSales$ = this.allSales$.pipe(map((allSales) => allSales.filter(sale => sale.isComplete)));

  updates$: Subscription;

  constructor(private dataService: DataService, private updateService: UpdateService) {
    this.updates$ = updateService.loop$.subscribe(this.tick.bind(this));
    this.sales = [
      // new SaleModel(new Map)
    ];
    this.update();
  }

  public createSale(items: Map<ItemModel, number>): SaleModel {
    const sale = new SaleModel(items);
    this.sales.push(sale);
    this.update();
    console.log(sale.label + ':', sale);
    return sale;
  }

  public processSale(sale: SaleModel) {
    if (sale.isOpen) {
      for (const [item, qty] of sale.items) {
        item.current += qty;
      }
      sale.isComplete = false;
    } else if (sale.isSold) {
      this.dataService.currentMoney += sale.value;
      sale.isComplete = true;
    } else if (sale.isComplete) {
      sale.isComplete = false;
    }
    sale.isSold = false;
    sale.isOpen = false;
    this.update();
  }

  public update() {
    // this.allSales$.next(this.sales);
    this.allSales$.next(this.sales.filter(sale => (sale.isComplete || sale.isOpen || sale.isSold)));
  }


  private tick({ interval, value }: TimeInterval<number>) {
    const now = Date.now();
    this.sales.filter(sale => (sale.isOpen)).forEach(sale => {
      if (sale.remaining <= 0) {
        sale.isOpen = false;
        sale.isSold = true;
      }
      this.update();
    });
    // if (!(value % 1000)) { this.update(); }
  }

}
