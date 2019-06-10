import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '@components/components.module';

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    ComponentsModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
