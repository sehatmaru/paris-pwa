import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/sevice/auth-guard.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeirStatusComponent } from './pages/heir-status/heir-status.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'heir-check',
    component: HeirStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
