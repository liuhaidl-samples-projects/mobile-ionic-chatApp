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
  user = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.searchUserInfo();  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }

  goToSexPage(){
    let user = this.searchUserInfo();
    console.log('Go to sex page with current sex: '+user.sex.value);
    this.navCtrl.push(SexPage,{sex: user.sex.value});
  }

  searchUserInfo(){
    let user = {
      name: "Larry",
      account: "larryangela",
      barcode: "apps",
      sex: {value: "male",description: "男"},
      location: "辽宁 大连",
      signature: "快乐工作和生活",
      linkedInAccount: "未设置" 
    };
    return user;
  }

}
