import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

const routes: Routes = [
  { path: 'under-maintenance', component: UnderMaintenanceComponent },
  { path: '**', redirectTo: 'under-maintenance' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
