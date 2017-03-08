import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ImagesPage } from '../images/images';
import { CollectionsPage } from '../collections/collections';
import { CardsPage } from '../cards/cards';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';

/*
  Generated class for the Me page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

  goToImagesPage()
  {
   console.log('MePage.goToImagesPage'); 
   this.navCtrl.push(ImagesPage);
  }

  goToCollectionsPage()
  {
   console.log('MePage.goToCollecitonsPage'); 
   this.navCtrl.push(CollectionsPage);
  }

  goToCardsPage()
  {
   console.log('MePage.goToCardsPage'); 
   this.navCtrl.push(CardsPage);
  }

  goToSettingsPage()
  {
   console.log('MePage.goToSettingsPage'); 
   this.navCtrl.push(SettingsPage);
  }

  goToAboutPage()
  {
   console.log('MePage.goToAboutPage'); 
   this.navCtrl.push(AboutPage);
  }
}


