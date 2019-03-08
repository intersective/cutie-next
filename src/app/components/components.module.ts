import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { MetricPaneComponent } from './metric-pane/metric-pane.component';
import { MetricGridComponent } from './metric-grid/metric-grid.component';
import { ElsaBarComponent } from './elsa-bar/elsa-bar.component';

@NgModule({
  declarations: [NavbarComponent, MetricPaneComponent, MetricGridComponent, ElsaBarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [NavbarComponent, MetricPaneComponent, MetricGridComponent, ElsaBarComponent]
})
export class ComponentsModule { }
