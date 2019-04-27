const SHOP_TAIWAN = require('../../assets/img/taiwan_store.jpg');
const SHOP_KOREA= require('../../assets/img/korea_store.jpg');
const SHOP_HAINAN = require('../../assets/img/hainan_store.jpg');
const SHOP_01 = require('../../assets/img/store_01.jpg');
const STORE_02 = require('../../assets/img/store_02.jpg');

export default function () {
  return <div className="store-info">
    <div className="title-group">
      <h1 className="title">门店信息</h1>
      <h2 className="sub-title">About Store information</h2>
    </div>
    <div className="content">
      <div key={1} className="pic-wrapper">
        <img alt="" src={SHOP_01}/>
        <div className="txt-wrapper">
          门店信息
        </div>
      </div>
      <div key={2} className="pic-wrapper">
        <img alt="" src={STORE_02}/>
        <div className="txt-wrapper">
          门店信息
        </div>
      </div>
      <div key={3} className="pic-wrapper">
        <img alt="" src={SHOP_TAIWAN}/>
        <div className="txt-wrapper">
          门店信息
        </div>
      </div>
      <div key={4} className="pic-wrapper">
        <img alt="" src={SHOP_HAINAN}/>
        <div className="txt-wrapper">
          门店信息
        </div>
      </div>
      <div key={5} className="pic-wrapper">
        <img alt="" src={SHOP_KOREA}/>
        <div className="txt-wrapper">
          门店信息
        </div>
      </div>
    </div>
  </div>
}
