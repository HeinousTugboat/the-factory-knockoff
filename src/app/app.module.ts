import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccountBalanceGraphComponent } from './account-balance-graph/account-balance-graph.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCardComponent } from './cards/auto-card/auto-card.component';
import { BuildStepsGraphComponent } from './build-steps-graph/build-steps-graph.component';
import { DataService } from './services/data.service';
import { ItemCardComponent } from './cards/item-card/item-card.component';
import { AutomationComponent } from './panels/automation/automation.component';
import { GameMenuComponent } from './panels/game-menu/game-menu.component';
import { InventoryComponent } from './panels/inventory/inventory.component';
import { ManufacturingComponent } from './panels/manufacturing/manufacturing.component';
import { PurchasingComponent } from './panels/purchasing/purchasing.component';
import { SalesComponent } from './panels/sales/sales.component';
import { PurchaseCardComponent } from './cards/purchase-card/purchase-card.component';
import { RecipeCardComponent } from './cards/recipe-card/recipe-card.component';
import { SalesCardComponent } from './cards/sales-card/sales-card.component';
import { UpdateService } from './services/update.service';
import { SalesService } from './services/sales.service';
import { SpinnerComponent } from './spinner/spinner.component';

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
    PurchaseCardComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UpdateService,
    DataService,
    SalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
