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
    UserInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    UserInfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
