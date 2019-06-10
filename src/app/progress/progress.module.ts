import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@components/components.module';
import { ProgressTableModule } from '@components/progress-table/progress-table.module';
import { ProgressComponent } from './progress.component';

@NgModule({
  declarations: [ProgressComponent],
  imports: [
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProgressComponent
      }
    ]),
    ProgressTableModule,
  ]
})
export class ProgressModule { }
