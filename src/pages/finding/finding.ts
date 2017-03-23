import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyLocationPage } from '../my-location/my-location';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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

  constructor(public navCtrl: NavController
  , public navParams: NavParams
  , public barcodeScanner: BarcodeScanner) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindingPage');
  }
 
  goToMyLocationPage(){
    this.navCtrl.push(MyLocationPage);
  }

  scan(){
     this.barcodeScanner.scan().then((barcodeData) => {
        // Success! Barcode data is here
        alert("Barcode Data: "+barcodeData);
      }, (err) => {
        // An error occurred
        alert("Barcode Scan Error: "+err);
    });
  }  
}
