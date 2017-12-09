import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from './data.service';
import { ItemModel } from './item.model';
import { RecipeModel } from './recipe.model';
import { UpdateService } from './update.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'The Factory';
  logs: string[] = [];
  items: ItemModel[] = [];
  recipes: RecipeModel[] = [];
  router$: Subscription;
  logUpdates$: Subscription;
  currentRoute: string;

  constructor(private router: Router, public updateService: UpdateService, public dataService: DataService) {

    this.router$ = router.events
      .pipe(
        filter(x => (x instanceof NavigationEnd)),
        map((x: RouterEvent) => x.url.slice(1)),
      ).subscribe(x => this.currentRoute = x);

    this.logUpdates$ = updateService.log.subscribe(entry => {
      this.logs.push(entry);
    });
  }

  ngOnInit() {
    this.items = ItemModel.init();
    this.recipes = RecipeModel.init();
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
    this.logUpdates$.unsubscribe();
  }
}
