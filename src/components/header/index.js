import './index.less';
import {
  Icon
} from 'antd';
import Link from 'umi/link';

const LOGO_PATH = require("../../assets/img/logo.png");

export default function Header() {
  return <div className="page-header">
    <Link to="/"><img src={LOGO_PATH} alt="logo" className="logo"/></Link>
    <span className="contact-method">
      <Icon type="phone" />028-87365575
    </span>
  </div>
}
