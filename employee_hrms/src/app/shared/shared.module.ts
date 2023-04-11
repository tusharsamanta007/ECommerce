import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import {DialogModule} from '@angular/cdk/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    DialogModule,
    MatButtonModule
  ],
  exports: [
    MatChipsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SpinnerComponent,
    DialogModule,
    MatButtonModule
  ]
})
export class SharedModule { }
