import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ItemModel } from './item.model';
import { RecipeModel } from './recipe.model';

@Injectable()
export class DataService {
  items$: BehaviorSubject<ItemModel[]>;
  recipes$: BehaviorSubject<RecipeModel[]>;
  currentMoney = 100e23;
  totalEarned = 100;
  constructor() {
    this.items$ = new BehaviorSubject(ItemModel.init());
    this.recipes$ = new BehaviorSubject(RecipeModel.init());
  }

  update() {
    console.log('dataService: update');
    this.items$.next(Array.from(ItemModel.list.values()));
    this.recipes$.next(Array.from(RecipeModel.list.values()));
  }

}
