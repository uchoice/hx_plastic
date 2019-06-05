import './index.less'

const LOGO_IMG = require('../../assets/img/logo.png');
const QR_CODE_IMG = require('../../assets/img/qr_code.png');

export default function () {
  return <div className="footer">
    <div className="logo-wrapper">
      <img alt="" src={LOGO_IMG}/>
    </div>
    <div className="company-info">
      <div className="info">
        <p>香港桦萱医疗美容集团</p>
        <p>成都桦萱医疗美容整形医院</p>
        <p>联系电话：028-87365575</p>
        <p>地址：成都市锦江区宏济上路140号</p>
        <p><a href="http://www.hsuanmr.com/admin.html">桦萱(hsuan) 蜀ICP备19015805号-1</a></p>
      </div>
      <div className="qrcode-wrapper">
        <img alt="" src={QR_CODE_IMG}/>
      </div>
    </div>
  </div>
}
