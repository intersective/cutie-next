import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AppModule } from '../app.module';
import { ComponentsModule } from '../components/components.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProgressPopoverComponent } from '../components/progress-popover/progress-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    ComponentsModule,
    NgxDatatableModule
  ],
  declarations: [HomeComponent],
  entryComponents: [
    ProgressPopoverComponent
  ]
})
export class HomeModule {}
