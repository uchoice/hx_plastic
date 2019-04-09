import './index.less';
import { Component  } from 'react';
import Nav from '../../components/nav';
import ClassicsProject from './classics-project';
import StarGroup  from './star-group';
import Environment from './environment';
import AboutCompany from './about-company';
import StoreInfo from './store-info';

const NAV_IMG = require('../../assets/img/nav_pic.png');
const ENV_01 = require('../../assets/img/env_01.png');
const ENV_02 = require('../../assets/img/env_02.png');
const ENV_03 = require('../../assets/img/env_03.png');
const ENV_04 = require('../../assets/img/env_04.png');
const ENV_05 = require('../../assets/img/env_05.png');
const ENV_06 = require('../../assets/img/env_05.png');
const ENV_07 = require('../../assets/img/env_07.png');
const ENV_08 = require('../../assets/img/env_07.png');

export default class Home extends Component {
  render () {
    return (
      <div className="home">
        <Nav imgs={[
          NAV_IMG,
          NAV_IMG
        ]}/>
        <div className="content-wrapper">
          <ClassicsProject />
          <AboutCompany />
          <StarGroup />
          <Environment infos={[
            {title:'会客场所', img: ENV_01},
            {title:'会客场所', img: ENV_02},
            {title:'会客场所', img: ENV_03},
            {title:'会客场所', img: ENV_04},
            {title:'会客场所', img: ENV_05},
            {title:'会客场所', img: ENV_06},
            {title:'会客场所', img: ENV_07},
            {title:'会客场所', img: ENV_08},
          ]} />
          <StoreInfo />
        </div>
      </div>
    );
  }
}
