import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SexPage } from '../sex/sex';
import { Storage } from '@ionic/storage';

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
  user = {
      name: "",
      account: "",
      barcode: "",
      sex: {value: "",description: ""},
      location: "",
      signature: "",
      linkedInAccount: "" 
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.user = this.searchUserInfo();  
  }e

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }

  goToSexPage(){
    console.log('Go to sex page with current sex: '+this.user.sex.value);
    this.navCtrl.push(SexPage,{sex: this.user.sex.value, sexCallback: this.sexCallback});
  }

  //初始化用户的个人信息
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

  selectedSex="";
  sexCallback = (params) => {
      return new Promise((resolve, reject)=>{
           if(typeof(params)!='undefined'){
             this.selectedSex = params;
             console.log("The return sex is {"+this.selectedSex+"}")
             this.user.sex.value = this.selectedSex;
             if(this.selectedSex == "male"){
              this.user.sex.description = "男";
             }
             else{
              this.user.sex.description = "女";
             }

            this.storage.get('sex').then((storageSex) => {
              console.log('The stored sex is {'+storageSex+'} from Storage');
            });
          
             resolve("ok");
           }
           else{
             reject(Error('error'));
           }
      }); 
    }
}
