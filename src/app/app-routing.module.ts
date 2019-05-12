import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent} from './add-employee/add-employee.component';
import { ViewEmployeesComponent} from './view-employees/view-employees.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent} from './login/login.component';
import { AdminComponent} from './admin/admin.component';
import {AuthService} from './auth.service';

const routes: Routes = [
  { path: '',  redirectTo: '/login', pathMatch: 'full'},
  { path: 'add-employee', component: AddEmployeeComponent , canActivate: [AuthService]},
  { path: 'view-employees', component: ViewEmployeesComponent , canActivate: [AuthService]},
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthService]},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
