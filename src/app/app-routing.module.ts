import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './employee/welcome/welcome.component';
import { LoginComponent } from './employee/login.component';
import { EmployeeDetailsGuardService } from './services/employee-details-guard.service';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
  { path: 'welcome', component: WelcomeComponent, canActivate: [EmployeeDetailsGuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
