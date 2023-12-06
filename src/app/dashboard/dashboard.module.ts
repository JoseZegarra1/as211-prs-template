import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFlexyModule } from '../demo-flexy-module'
import { DashboardComponent } from './dashboard.component';
import { CardsComponent } from './dashboard-components/cards/cards.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TeenDashboardInfoComponent } from './dashboard-components/teen-dashboard-info/teen-dashboard-info.component';
import { OperativeUnitDashboardInfoComponent } from './dashboard-components/operative-unit-dashboard-info/operative-unit-dashboard-info.component';
import { TransferDashboardInfoComponent } from './dashboard-components/transfer-dashboard-info/transfer-dashboard-info.component';
import { AdolescentListComponent } from './dashboard-components/adolescent-list/adolescent-list.component';
import { AdolescentFormComponent } from './dashboard-components/adolescent-form/adolescent-form.component';
import { TransDistComponent } from './dashboard-components/trans-dist/trans-dist.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    TeenDashboardInfoComponent,
    OperativeUnitDashboardInfoComponent,
    TransferDashboardInfoComponent,
    AdolescentListComponent,
    AdolescentFormComponent,
    TransDistComponent,
  ],
    imports: [
        CommonModule,
        DemoFlexyModule,
        FormsModule,
        NgApexchartsModule,
        ReactiveFormsModule
    ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
