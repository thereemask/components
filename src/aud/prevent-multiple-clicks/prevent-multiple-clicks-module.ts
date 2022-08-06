import {NgModule} from '@angular/core';
import {PreventMultipleClicks} from './prevent-multiple-clicks';

@NgModule({
  declarations: [PreventMultipleClicks],
  exports: [PreventMultipleClicks],
})
export class PreventMultipleClicksModule {}
