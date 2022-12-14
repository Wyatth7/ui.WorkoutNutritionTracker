import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCircleComponent } from './directives/graphs/progress-circle/progress-circle.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HeaderComponent } from './navigation/header/header.component';

@NgModule({
  declarations: [ProgressCircleComponent, HeaderComponent],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      radius: 60,
      space: -10,
      outerStrokeGradient: false,
      outerStrokeWidth: 10,
      outerStrokeColor: '#fff',
      innerStrokeColor: '#fff',
      innerStrokeWidth: 10,
      title: 'UI',
      animateTitle: false,
      showUnits: false,
      showBackground: false,
      startFromZero: false,
    }),
  ],
  exports: [ProgressCircleComponent, HeaderComponent],
})
export class SharedModule {}
