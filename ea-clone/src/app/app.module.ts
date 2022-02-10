import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterContainerComponent } from './component/footerComponent/footer-container/footer-container.component';
import { FooterBannerComponent } from './component/footerComponent/footer-banner/footer-banner.component';
import { ButtonSubscribeComponent } from './designSystem/buttonSubscribe/button-subscribe/button-subscribe.component';
import { ButtonDiscoverComponent } from './designSystem/buttonSubscribe/button-discover/button-discover.component';
import { FooterSocialContainerComponent } from './component/footerComponent/footer-social-container/footer-social-container.component';
import { FooterLanguageContainerComponent } from './component/footerComponent/footer-language-container/footer-language-container.component';
import { UltimeNovitaContainerComponent } from './component/ultimeNovComponent/ultime-novita-container/ultime-novita-container.component';
import { UltimeNovitaCardSectionComponent } from './component/ultimeNovComponent/ultime-novita-card-section/ultime-novita-card-section.component';
import { UltimeNovitaNavbarComponent } from './component/ultimeNovComponent/ultime-novita-navbar/ultime-novita-navbar.component';
import { ButtonDettagliComponent } from './designSystem/buttonSubscribe/button-dettagli/button-dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterContainerComponent,
    FooterBannerComponent,
    ButtonSubscribeComponent,
    ButtonDiscoverComponent,
    FooterSocialContainerComponent,
    FooterLanguageContainerComponent,
    UltimeNovitaContainerComponent,
    UltimeNovitaCardSectionComponent,
    UltimeNovitaNavbarComponent,
    ButtonDettagliComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
