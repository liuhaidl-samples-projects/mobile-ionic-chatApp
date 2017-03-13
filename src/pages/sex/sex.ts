import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*import {
  FormGroup,
  FormControl
} from '@angular/forms';*/

/*
  Generated class for the Sex page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sex',
  templateUrl: 'sex.html'
})
export class SexPage {
  selectedSex;
  sexCallback;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    let currentSex= navParams.get("sex");
    console.log('The current sex:'+currentSex);
    this.selectedSex = currentSex;
    this.sexCallback = navParams.get("sexCallback");
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SexPage');
  }
 
  selectSexChange(selectedSex){
     this.selectedSex = selectedSex;
     console.log('The selected sex: '+ this.selectedSex);
     //存储用户的性别到Storage
     this.storage.ready().then(() => {
          // set a key/value
          this.storage.set('sex', this.selectedSex).then(() => {
          console.log('The selected sex {'+ this.selectedSex + "} has been stored into Storage");
       });

     });

     //返回到用户个人主页
     console.log('Go back to user profile main page');
     this.sexCallback(this.selectedSex).then(
       (result) => {
         this.navCtrl.pop(); 
       }, (err) => {
         console.log(err);
       }
     );
  }
}
