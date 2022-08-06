import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreventInputComponent } from './prevent-input.component';

const routes: Routes = [{ path: '', component: PreventInputComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreventInputRoutingModule { }
