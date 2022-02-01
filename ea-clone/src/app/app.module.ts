import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterContainerComponent } from './component/footerComponent/footer-container/footer-container.component';
import { FooterBannerComponent } from './component/footerComponent/footer-banner/footer-banner.component';
import { ButtonSubscribeComponent } from './designSystem/buttonSubscribe/button-subscribe/button-subscribe.component';
import { ButtonDiscoverComponent } from './designSystem/buttonSubscribe/button-discover/button-discover.component';
import { FooterSocialContainerComponent } from './component/footerComponent/footer-social-container/footer-social-container.component';
import { FooterLanguageContainerComponent } from './component/footerComponent/footer-language-container/footer-language-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterContainerComponent,
    FooterBannerComponent,
    ButtonSubscribeComponent,
    ButtonDiscoverComponent,
    FooterSocialContainerComponent,
    FooterLanguageContainerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
