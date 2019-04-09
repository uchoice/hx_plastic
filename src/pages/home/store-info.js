const SHOP_HONGKONG = require('../../assets/img/shop_hongkong.png');
const SHOP_CHENGDU = require('../../assets/img/shop_chengdu.png');
const SHOP_HAINAN = require('../../assets/img/shop_hainan.png');
const SHOP_KOREA = require('../../assets/img/shop_korea.png');
const SHOP_TAIWAN = require('../../assets/img/shop_taiwan.png');

export default function () {
  return <div className="store-info">
    <div className="title-group">
      <h1 className="title">门店信息</h1>
      <h2 className="sub-title">About Store information</h2>
    </div>
    <div className="content">
      <div className="pic-wrapper">
        <img alt="" src={SHOP_HONGKONG}/>
      </div>
      <div className="pic-wrapper">
        <img alt="" src={SHOP_CHENGDU}/>
      </div>
      <div className="pic-wrapper">
        <img alt="" src={SHOP_HAINAN}/>
      </div>
      <div className="pic-wrapper">
        <img alt="" src={SHOP_KOREA}/>
      </div>
      <div className="pic-wrapper">
        <img alt="" src={SHOP_TAIWAN}/>
      </div>
    </div>
  </div>
}
