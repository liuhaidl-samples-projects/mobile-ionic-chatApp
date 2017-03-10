import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  //sex;
  //sexForm;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*this.sexForm = new FormGroup({
      "sex": new FormControl({value: 'male', disabled: false})
    });*/
    let sex= navParams.get("sex");
    console.log('Init Sex :'+sex);

  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SexPage');
  }

 /*doSubmit(event) {
    console.log('Submitting form', this.sexForm.value);
    event.preventDefault();
  }*/

  selectSex(sex){
    console.log('Sex is', sex);
  }

  goBack(){
    this.navCtrl.pop();
  }
}
