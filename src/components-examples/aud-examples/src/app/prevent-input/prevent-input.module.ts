import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreventInputRoutingModule } from './prevent-input-routing.module';
import { PreventInputComponent } from './prevent-input.component';


@NgModule({
  declarations: [
    PreventInputComponent
  ],
  imports: [
    CommonModule,
    PreventInputRoutingModule
  ]
})
export class PreventInputModule { }
