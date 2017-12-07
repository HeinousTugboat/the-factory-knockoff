import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../recipe.model';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.scss']
})
export class ManufacturingComponent implements OnInit {
  recipes: RecipeModel[] = [];
  constructor() { }

  ngOnInit() {
    this.recipes = RecipeModel.init();
  }

}
