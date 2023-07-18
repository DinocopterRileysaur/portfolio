import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

const routes: Routes = [{ path: '**', component: UnderMaintenanceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
