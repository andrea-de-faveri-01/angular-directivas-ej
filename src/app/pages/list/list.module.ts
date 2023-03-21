import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvengerComponent } from './components/avenger/avenger.component';
import { ListComponent } from './list.component';



@NgModule({
  declarations: [
    ListComponent,
    AvengerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
