import { GameMenuComponent } from './panels/game-menu/game-menu.component';
import { ManufacturingComponent } from './panels/manufacturing/manufacturing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchasingComponent } from './panels/purchasing/purchasing.component';
import { InventoryComponent } from './panels/inventory/inventory.component';
import { SalesComponent } from './panels/sales/sales.component';
import { AutomationComponent } from './panels/automation/automation.component';

const routes: Routes = [
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
