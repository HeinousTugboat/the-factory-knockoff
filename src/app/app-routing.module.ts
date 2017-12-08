import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutomationComponent } from './panels/automation/automation.component';
import { GameMenuComponent } from './panels/game-menu/game-menu.component';
import { InventoryComponent } from './panels/inventory/inventory.component';
import { ManufacturingComponent } from './panels/manufacturing/manufacturing.component';
import { PurchasingComponent } from './panels/purchasing/purchasing.component';
import { SalesComponent } from './panels/sales/sales.component';

const routes: Routes = [
  {path: '', component: PurchasingComponent},
  {path: 'purchasing', component: PurchasingComponent},
  {path: 'manufacturing', component: ManufacturingComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'automation', component: AutomationComponent},
  {path: 'game', component: GameMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
