import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseComponent } from './pages/database/database.component';
import { DatabaseActionsComponent } from './pages/database-actions/database-actions.component';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [DatabaseComponent, DatabaseActionsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module
  ]
})
export class DatabaseModule { }
