import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { RecipeModel } from '../../models/recipe.model';
import { ItemModel } from '../../models/item.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: RecipeModel;
  // @Output() make = new EventEmitter;
  inputs: [ItemModel, number, number][] = [];

  constructor() { }

  ngOnInit() {
    this.mapInputs();
  }

  mapInputs() {
    this.inputs = [];
    for (const [input, qty] of this.recipe.inputMap.entries()) {
      this.inputs.push([input, 0, qty]);
    }
  }

  craft() {
    if (this.recipe.progress.length !== this.recipe.inputs.length) {
      const next = this.recipe.inputs[this.recipe.progress.length];
      if (next.current >= 1) {
        this.recipe.progress.push(next);
        next.current--;
        this.inputs.filter(x => x[0] === next)[0][1]++;
      }
    } else {
      this.recipe.output.current++;
      this.recipe.progress = [];
      if (!this.recipe.output.available) {
        this.recipe.output.available = true;
      }
      this.mapInputs();
    }
  }

}
