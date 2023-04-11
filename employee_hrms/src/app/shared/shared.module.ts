import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
