import './index.less';
import React, { Component } from 'react';
import Block from '@/components/block';
import ContactUsBlock from '@/components/contact-us';
import { dynamicImportJs } from '@/utils';

const PROJECT_MBWD = require('@/assets/img/us_mk_icon.png')

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.dituContentRef = React.createRef();
  }
  loadBaiduMap = () => {
    dynamicImportJs('http://api.map.baidu.com/getscript?v=1.1&ak=&services=true&t=20130716024058').then(res => {
      //创建和初始化地图函数：
    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMarker();//向地图中添加marker
      addRemark();//向地图中添加文字标注
  }

  //创建地图函数：
  function createMap(){
      var map = new window.BMap.Map("dituContent");//在百度地图容器中创建一个地图
      var point = new window.BMap.Point(104.098784,30.647093);//定义一个中心点坐标
      map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
      window.map = map;//将map变量存储在全局
  }

  //地图事件设置函数：
  function setMapEvent(){
    window.map.disableDragging();//禁用地图拖拽事件
    window.map.disableScrollWheelZoom();//禁用地图滚轮放大缩小，默认禁用(可不写)
    window.map.disableDoubleClickZoom();//禁用鼠标双击放大
    window.map.disableKeyboard();//禁用键盘上下左右键移动地图，默认禁用(可不写)
  }

  //地图控件添加函数：
  function addMapControl(){
      //向地图中添加缩放控件
    var ctrl_nav = new window.BMap.NavigationControl({anchor:window.BMAP_ANCHOR_TOP_LEFT,type:window.BMAP_NAVIGATION_CONTROL_ZOOM});
    window.map.addControl(ctrl_nav);
                  //向地图中添加比例尺控件
    var ctrl_sca = new window.BMap.ScaleControl({anchor:window.BMAP_ANCHOR_BOTTOM_LEFT});
    window.map.addControl(ctrl_sca);
  }

  //标注点数组
  var markerArr = [{title:"地址",content:"成都市锦江区宏济上路140号",point:"104.098811|30.647093",isOpen:0,icon:{w:21,h:21,l:0,t:0,x:6,lb:5}}
   ];
  //创建marker
  function addMarker(){
      for(var i=0;i<markerArr.length;i++){
          var json = markerArr[i];
          var p0 = json.point.split("|")[0];
          var p1 = json.point.split("|")[1];
          var point = new window.BMap.Point(p0,p1);
          var iconImg = createIcon(json.icon);
                var marker = new window.BMap.Marker(point,{icon:iconImg});
          var iw = createInfoWindow(i);
          var label = new window.BMap.Label(json.title,{"offset":new window.BMap.Size(json.icon.lb-json.icon.x+10,-20)});
          marker.setLabel(label);
          window.map.addOverlay(marker);
                label.setStyle({
                            borderColor:"#808080",
                            color:"#333",
                            cursor:"pointer"
                });

          (function(){
              var index = i;
              var _iw = createInfoWindow(i);
              var _marker = marker;
              _marker.addEventListener("click",function(){
                  this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open",function(){
                  _marker.getLabel().hide();
                })
                _iw.addEventListener("close",function(){
                  _marker.getLabel().show();
                })
              label.addEventListener("click",function(){
                  _marker.openInfoWindow(_iw);
                })
              if(!!json.isOpen){
                label.hide();
                _marker.openInfoWindow(_iw);
              }
            })()
            }
        }
        //创建InfoWindow
        function createInfoWindow(i){
            var json = markerArr[i];
            var iw = new window.BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
            return iw;
        }
        //创建一个Icon
        function createIcon(json){
            var icon = new window.BMap.Icon(PROJECT_MBWD, new window.BMap.Size(json.w,json.h),{imageOffset: new window.BMap.Size(-json.l,-json.t),infoWindowOffset:new window.BMap.Size(json.lb+5,1),offset:new window.BMap.Size(json.x,json.h)})
            return icon;
        }
      //文字标注数组
        var lbPoints = [{point:"116.360288|39.972465",content:"我的标记"}
        ];
        //向地图中添加文字标注函数
        function addRemark(){
            for(var i=0;i<lbPoints.length;i++){
                var json = lbPoints[i];
                var p1 = json.point.split("|")[0];
                var p2 = json.point.split("|")[1];
                var label = new window.BMap.Label("<div style='padding:2px;'>"+json.content+"</div>",{point:new window.BMap.Point(p1,p2),offset:new window.BMap.Size(3,-6)});
                window.map.addOverlay(label);
                label.setStyle({borderColor:"#999"});
            }
        }

        initMap();//创建和初始化地图
    })
  }
  componentDidMount () {
    this.loadBaiduMap()
  }
  render () {
    return <div className="contact-us">
      <Block
        title={'预约咨询'}
        desc={'桦萱医疗整形团队成立于2013年，追随中国整形外科发展的潮流，汇集了国内外一流整形外科的精髓，把西方的先进技术和中国的审美完美结合，秉承“诚信、安全、精美”的品牌理念，积极探索和传播新的时代需求与审美标准。桦萱坐落于成都市锦江区宏济上路140号，占地面积 600 平米，是一家专业全方位医美运营机构。'}
      />
      <ContactUsBlock />
      <div className="map-wrapper">
        <div className="address">地址：成都市锦江区宏济上路140号</div>
        <div
          style={{
            height:'550px',
            border:'#ccc solid 1px',
            marginTop: '20px'
          }}
          id="dituContent"
        />
      </div>
    </div>
  }
}
