import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { FormsComponent } from './components/forms/forms.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProgressSnipperComponent } from './components/progress-snipper/progress-snipper.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { TeenPrincipalComponent } from './components/teen/teen-principal/teen-principal.component';
import {TeenFormComponent} from "./components/teen/teen-form/teen-form.component";
import {
  AsignationPrincipalComponent
} from "./components/asignation/asignation-principal/asignation-principal.component";
import {AsignationFormComponent} from "./components/asignation/asignation-form/asignation-form.component";
import {
  FuncionaryPrincipalComponent
} from "./components/funcionary/funcionary-principal/funcionary-principal.component";
import { FuncionaryFormComponent } from './components/funcionary/funcionary-form/funcionary-form.component';
import { AdolescentListComponent } from './dashboard/dashboard-components/adolescent-list/adolescent-list.component';
import { AdolescentFormComponent } from './dashboard/dashboard-components/adolescent-form/adolescent-form.component';
import { TransDistComponent } from './dashboard/dashboard-components/trans-dist/trans-dist.component';

const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path: "", component: DashboardComponent},
      {path:"home", component:DashboardComponent},
      {path:"trans-dist", component:TransDistComponent},
      {path: 'adolescent-list',component: AdolescentListComponent},
      {path: 'adolescent-form',component: AdolescentFormComponent},
      {path:"alerts", component:AlertsComponent},
      {path:"asignation", component: AsignationPrincipalComponent},
      {path:"forms", component:FormsComponent},
      {path:"teen", component:TeenPrincipalComponent},
      {path:"grid-list", component:GridListComponent},
      {path:"menu", component:MenuComponent},
      {path:"tabs", component:TabsComponent},
      {path:"expansion", component:ExpansionComponent},
      {path:"chips", component:ChipsComponent},
      {path:"progress", component:ProgressComponent},
      {path:"toolbar", component:ToolbarComponent},
      {path:"progress-snipper", component:ProgressSnipperComponent},
      {path:"snackbar", component:SnackbarComponent},
      {path:"slider", component:SliderComponent},
      {path:"slide-toggle", component:SlideToggleComponent},
      {path:"tooltip", component:TooltipsComponent},
      {path:"button", component:ButtonsComponent},
      {path:"teen-form", component: TeenFormComponent},
      {path:"asignation-form", component: AsignationFormComponent},
      {path:"asignation-list", component: AsignationPrincipalComponent},
      {path:"funcionary", component: FuncionaryPrincipalComponent},
      {path: "funcionary-form", component: FuncionaryFormComponent},
    ]
  },

  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
