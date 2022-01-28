import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterContainerComponent } from './component/footerComponent/footer-container/footer-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
