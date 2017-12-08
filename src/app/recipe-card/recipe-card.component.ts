import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Output() make = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
