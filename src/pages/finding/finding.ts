import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyLocationPage } from '../my-location/my-location';

/*
  Generated class for the Finding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-finding',
  templateUrl: 'finding.html'
})
export class FindingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindingPage');
  }
 
  goToMyLocationPage(){
    this.navCtrl.push(MyLocationPage);
  }
}
