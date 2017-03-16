import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
//import {Geolocation} from 'ionic-native';

//declare var AMap;//声明
declare var BMap;

/*
  Generated class for the MyLocation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-location',
  templateUrl: 'my-location.html'
})
export class MyLocationPage {
  
  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController
  , public navParams: NavParams
  , public platform: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyLocationPage');

    //初始化高德地图
    /*let map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: [116.397428, 39.90923]
    });

    AMap.plugin(['AMap.ToolBar'], function () {
      map.addControl(new AMap.ToolBar());
    })

    let marker = new AMap.Marker({
      position: map.getCenter(),
      draggable: true,
      cursor: 'move'
    });
    marker.setMap(map);
    // 设置点标记的动画效果，此处为弹跳效果
    marker.setAnimation('AMAP_ANIMATION_BOUNCE');*/

    //Geolocation.getCurrentPosition().then(pos => {
    //console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    //});

  }
  
ionViewWillEnter() {
    /*navigator.geolocation.getCurrentPosition(function (position){
        let latitudeP = position.coords.latitude;
        let longitudeP = position.coords.longitude;
        console.log("latitudeP: "+latitudeP + " - longitudeP: "+longitudeP);
    });*/
  
    //初始化百度地图
    let map = new BMap.Map(this.mapElement.nativeElement, { enableMapClick: true });//创建地图实例
    map.enableScrollWheelZoom();//启动滚轮放大缩小，默认禁用
    map.enableContinuousZoom();//连续缩放效果，默认禁用
    let point = new BMap.Point(200,200);
    map.centerAndZoom(point,16);//设置中心和地图显示级别
    
    let geolocation = new BMap.Geolocation();//取当前所在的位置
    console.log("MyLocationPage.ionViewWillEnter() has been invoked"); 
	  geolocation.getCurrentPosition(function(r){
      console.log("Location API Call Return Code: "+this.getStatus());  
      if(this.getStatus() == "0"){
          let marker = new BMap.Marker(r.point);
          map.addOverlay(marker);
          map.panTo(r.point);
          map.centerAndZoom(r.point,16);//设置中心和地图显示级别
        
          let geoc = new BMap.Geocoder();//通过当前所在位置的经纬度坐标，取得所有地址    
          let detailedAddress;
          geoc.getLocation(r.point, function(rs){
              let finalAddress = rs.address;
              detailedAddress = finalAddress;
              console.log("Your current address: {"+detailedAddress+"}");
              /*let addComp = rs.addressComponents;
              detailedAddress = 
                  addComp.province 
                  + "," + addComp.city 
                  + "," + addComp.district 
                  + "," + addComp.street 
                  + "," + addComp.streetNumber;*/

              let opts = {
                  width : 50,     // 信息窗口宽度
                  height: 30,     // 信息窗口高度
                  title : "我的位置" , // 信息窗口标题
                  offset: new BMap.Size(0,-20),
                  enableMessage:false//设置允许信息窗发送短息
                  //message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地喔~"
                };

              let infoWindow = new BMap.InfoWindow("地址："+detailedAddress+"", opts); // 创建信息窗口对象 
              map.openInfoWindow(infoWindow,r.point); //开启信息窗口*/
              marker.addEventListener("click", function(){          
                map.openInfoWindow(infoWindow,r.point); //开启信息窗口
              });
          });
        
          /*let convertor = new BMap.Convertor();
          let pointArr = [];
          pointArr.push(r.point);
          convertor.translate(pointArr, 1, 5, function(data){
            if(data.status === 0) {
              let marker = new BMap.Marker(data.points[0]);
              map.addOverlay(marker);

              let geoc = new BMap.Geocoder();    
              geoc.getLocation(data.points[0], function(rs){
                  let addComp = rs.addressComponents;
                  let detailedAddress = 
                  addComp.province 
                  + "<br> " + addComp.city 
                  + "<br> " + addComp.district 
                  + "<br>" + addComp.street 
                  + "<br>" + addComp.streetNumber;
                  let labelgg = new BMap.Label("我的位置:<br> "+detailedAddress+"",{offset:new BMap.Size(0,15)});
                  marker.setLabel(labelgg);  
              });

              map.panTo(r.point);
              map.centerAndZoom(data.points[0],16);//设置中心和地图显示级别
            }
          });*/
          }
        else {
          alert('failed'+this.getStatus());
        }        
	  },{enableHighAccuracy: true, timeout: 30});

    //地图放大缩小控件
    let sizeMap = new BMap.Size(10, 80);//显示位置
    map.addControl(new BMap.NavigationControl({
      anchor: 1,//显示方向
      offset: sizeMap
    }));

    //3D效果矢量图控件
    let size3D = new BMap.Size(10, 10);
    map.addControl(new BMap.MapTypeControl({
      anchor: 1,
      offset: size3D
    }));

  }
}
