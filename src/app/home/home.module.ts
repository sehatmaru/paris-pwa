import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from '../auth/sevice/auth-guard.service';
import { MaterialModule } from '../material.module';
import { HeirStatusComponent } from './pages/heir-status/heir-status.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeirStatusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
  ],
  providers: [AuthGuardService]
})
export class HomeModule { }
