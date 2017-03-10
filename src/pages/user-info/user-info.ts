import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SexPage } from '../sex/sex';

/*
  Generated class for the UserInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html'
})
export class UserInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }

  goToSexPage(){
    console.log('UserInfoPage.goToSexPage');
    this.navCtrl.push(SexPage,{sex: "male"});
  }

}
