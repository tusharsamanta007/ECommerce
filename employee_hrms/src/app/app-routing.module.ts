import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './CommonTools/authguard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationComponent } from './user/authentication/authentication.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate:[AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
