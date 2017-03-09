import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { FindingPage } from '../pages/finding/finding';
import { MePage } from '../pages/me/me';
import { ImagesPage } from '../pages/images/images';
import { CollectionsPage } from '../pages/collections/collections';
import { CardsPage } from '../pages/cards/cards';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { UserInfoPage } from '../pages/user-info/user-info';
import { PaymentPage } from '../pages/payment/payment';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    FindingPage,
    MePage,
    ImagesPage,
    CollectionsPage,
    CardsPage,
    SettingsPage,
    AboutPage,
    UserInfoPage,
    PaymentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      tabsHideOnSubPages: 'true'  //隐藏全部子页面tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
   MyApp,
    TabsPage,
    HomePage,
    FindingPage,
    MePage,
    ImagesPage,
    CollectionsPage,
    CardsPage,
    SettingsPage,
    AboutPage,
    UserInfoPage,
    PaymentPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
