import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { ItemModel } from './item.model';
import { RecipeModel } from './recipe.model';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Factory';
  logs: string[] = [];
  items: ItemModel[] = [];
  recipes: RecipeModel[] = [];

  constructor(public updateService: UpdateService, public dataService: DataService) {
    updateService.log.subscribe(entry => {
      // if (this.logs.length > 10) {
        // this.logs.shift();
      // }
      this.logs.push(entry);
    });
  }

  ngOnInit() {
    this.items = ItemModel.init();
    this.recipes = RecipeModel.init();
  }
}
