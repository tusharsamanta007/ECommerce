import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './views/user/user.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './CommonTools/http-interceptor.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CreateProductComponent } from './views/create-product/create-product.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
