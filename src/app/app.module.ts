import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccountBalanceGraphComponent } from './account-balance-graph/account-balance-graph.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCardComponent } from './auto-card/auto-card.component';
import { BuildStepsGraphComponent } from './build-steps-graph/build-steps-graph.component';
import { DataService } from './data.service';
import { ItemCardComponent } from './item-card/item-card.component';
import { AutomationComponent } from './panels/automation/automation.component';
import { GameMenuComponent } from './panels/game-menu/game-menu.component';
import { InventoryComponent } from './panels/inventory/inventory.component';
import { ManufacturingComponent } from './panels/manufacturing/manufacturing.component';
import { PurchasingComponent } from './panels/purchasing/purchasing.component';
import { SalesComponent } from './panels/sales/sales.component';
import { PurchaseCardComponent } from './purchase-card/purchase-card.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { SalesCardComponent } from './sales-card/sales-card.component';
import { UpdateService } from './update.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    PurchasingComponent,
    ManufacturingComponent,
    InventoryComponent,
    SalesComponent,
    SalesCardComponent,
    AutomationComponent,
    AutoCardComponent,
    GameMenuComponent,
    BuildStepsGraphComponent,
    AccountBalanceGraphComponent,
    RecipeCardComponent,
    PurchaseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UpdateService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
