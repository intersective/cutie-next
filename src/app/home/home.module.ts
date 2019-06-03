import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AppModule } from '../app.module';
import { ComponentsModule } from '@components/components.module';
import { ProgressTableModule } from '@components/progress-table/progress-table.module';

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
    ProgressTableModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
