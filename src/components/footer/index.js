import './index.less'

const LOGO_IMG = require('../../assets/img/logo.png');
const QR_CODE_IMG = require('../../assets/img/qr_code.png');

export default function () {
  return <div className="footer">
    <img alt="" src={LOGO_IMG}/>
    <div className="company-info">
      <div className="info">
        <p>香港华萱医疗美容集团</p>
        <p>成都华萱医疗美容整形医院</p>
        <p>联系电话：028-87365575</p>
        <p>地址：成都市锦江区宏济上路140号</p>
        <p>版权©成都华萱医疗美容整形医院所有</p>
      </div>
      <img alt="" src={QR_CODE_IMG}/>
    </div>
  </div>
}
