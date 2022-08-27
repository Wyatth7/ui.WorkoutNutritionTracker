import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkoutRoutingModule } from './workout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [DashboardComponent, NavigationComponent],
  imports: [CommonModule, WorkoutRoutingModule, SharedModule],
  exports: [NavigationComponent],
})
export class WorkoutModule {}
