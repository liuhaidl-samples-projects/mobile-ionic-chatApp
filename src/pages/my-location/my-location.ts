import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

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
  }
  
ionViewWillEnter() {
    //初始化百度地图
    let map = new BMap.Map(this.mapElement.nativeElement, { enableMapClick: true });//创建地图实例
    map.enableScrollWheelZoom();//启动滚轮放大缩小，默认禁用
    map.enableContinuousZoom();//连续缩放效果，默认禁用
    let point = new BMap.Point(116.06827, 22.549284);//坐标可以通过百度地图坐标拾取器获取
    map.centerAndZoom(point, 16);//设置中心和地图显示级别
  
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
    map.setCurrentCity("大连");//3D效果需要设置城市 
 
    //城市列表控件
    let sizeCity = new BMap.Size(10, 10);
    map.addControl(new BMap.CityListControl({
      anchor: 1,
      offset: sizeCity
    }));   
  }
}
