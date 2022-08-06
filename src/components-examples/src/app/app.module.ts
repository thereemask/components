import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PreventInputModule} from '@reemask/aud/prevent-input';
import {PreventMultipleClicksModule} from '@reemask/aud/prevent-multiple-clicks';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PreventInputModule, PreventMultipleClicksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
