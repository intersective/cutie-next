import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProgressPopoverComponent } from '@components/progress-popover/progress-popover.component';
import { ProgressTableComponent } from './progress-table.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NgxDatatableModule
  ],
  exports: [
    ProgressTableComponent
  ],
  declarations: [
    ProgressPopoverComponent,
    ProgressTableComponent
  ],
  entryComponents: [
    ProgressPopoverComponent
  ]
})
export class ProgressTableModule { }
