import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './CommonTools/authguard.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthenticationComponent } from './views/user/authentication/authentication.component';
import { CreateProductComponent } from './views/create-product/create-product.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path: 'create',
    component: CreateProductComponent,
    canActivate:[AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
