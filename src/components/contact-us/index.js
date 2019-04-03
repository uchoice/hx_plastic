import './index.less'
import {
  Icon
} from 'antd';

const QR_CODE = require('../../assets/img/qr_code.png');

export default function () {
  return <div className="contact-us-block">
    <img alt="" src={QR_CODE}/>
    <span className="contact-method">
      <Icon type="phone" />028-87365575
    </span>
  </div>
}
