import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../../data.service';
import { RecipeModel } from '../../recipe.model';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.scss']
})
export class ManufacturingComponent implements OnInit, OnDestroy {
  recipes: RecipeModel[];
  private recipes$: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.recipes$ = this.dataService.recipes$.subscribe(recipes => {
      this.recipes = recipes.filter(x => x.inputs.length && x.inputs.every(y => y && y.available));
    });
  }

  ngOnDestroy() {
    this.recipes$.unsubscribe();
  }

}
