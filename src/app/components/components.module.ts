import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { MetricPaneComponent } from './metric-pane/metric-pane.component';
import { MetricGridComponent } from './metric-grid/metric-grid.component';
import { ElsaBarComponent } from './elsa-bar/elsa-bar.component';
import { ElsaGhostComponent } from './elsa-ghost/elsa-ghost.component';
import { ProgressPopoverComponent } from './progress-popover/progress-popover.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MetricPaneComponent,
    MetricGridComponent,
    ElsaBarComponent,
    ElsaGhostComponent,
    ProgressPopoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NavbarComponent,
    MetricPaneComponent,
    MetricGridComponent,
    ElsaBarComponent,
    ProgressPopoverComponent
  ]
})
export class ComponentsModule { }
