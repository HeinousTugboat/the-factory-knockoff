import { Tiers } from '../../item.model';
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
  tierLists: Map<Tiers, RecipeModel[]> = new Map;
  tiers = Tiers;
  private recipes$: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.recipes$ = this.dataService.recipes$.subscribe(recipes => {
      this.recipes = recipes.filter(x => x.tier !== Tiers.RESOURCE)
        .filter(x => x.inputs.length && x.inputs.every(y => y && y.available));
      this.tierLists = new Map;
      this.recipes.forEach(recipe => {
        if (!this.tierLists.has(recipe.tier)) {
          this.tierLists.set(recipe.tier, [recipe]);
        } else {
          this.tierLists.get(recipe.tier).push(recipe);
        }
      });
    });
  }

  ngOnDestroy() {
    this.recipes$.unsubscribe();
  }

}
