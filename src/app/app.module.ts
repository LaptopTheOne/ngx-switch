import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSwitchModule } from 'ngx-switch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
