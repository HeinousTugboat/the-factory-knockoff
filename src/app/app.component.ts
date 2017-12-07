import { UpdateService } from './update.service';
import { Component, OnInit } from '@angular/core';
import { ItemModel } from './item.model';
import { RecipeModel } from './recipe.model';

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

  constructor(public updateService: UpdateService) {
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
