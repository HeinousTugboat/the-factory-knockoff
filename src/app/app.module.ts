import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { PurchasingComponent } from './panels/purchasing/purchasing.component';
import { ManufacturingComponent } from './panels/manufacturing/manufacturing.component';
import { InventoryComponent } from './panels/inventory/inventory.component';
import { SalesComponent } from './panels/sales/sales.component';
import { SalesCardComponent } from './sales-card/sales-card.component';
import { AutomationComponent } from './panels/automation/automation.component';
import { AutoCardComponent } from './auto-card/auto-card.component';
import { GameMenuComponent } from './panels/game-menu/game-menu.component';
import { BuildStepsGraphComponent } from './build-steps-graph/build-steps-graph.component';
import { AccountBalanceGraphComponent } from './account-balance-graph/account-balance-graph.component';

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
    AccountBalanceGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
