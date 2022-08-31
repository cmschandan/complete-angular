import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoverDirective } from './CustomDirective/hover.directive';
import { SetBackgroundDirective } from './CustomDirective/set-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    SetBackgroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
