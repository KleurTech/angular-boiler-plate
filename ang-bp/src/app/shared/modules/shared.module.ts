import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibGridComponent } from '../components/lib-grid/lib-grid.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    LibGridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ],
  exports: [
    LibGridComponent
  ]
})
export class SharedModule { }
