import './index.less';
import { Component  } from 'react';
import Nav from '../../components/nav';
import ClassicsProject from './classics-project';
import StarGroup  from './star-group';
import Environment from './environment';
import AboutCompany from './about-company';
import StoreInfo from './store-info';
import { request } from '@/utils';
import QueueAnim from 'rc-queue-anim';

export default class Home extends Component {
  state = {
    navImages: [],
    classicProjects: [],
    environments: [],
    storeInfo: [],
  }
  getCaourselImage = () => {
    request('/list?module=beautyCarouselImage&page=1&pageSize=20').then(res => {
      const navImages = res || []
      this.setState({navImages})
    })
  }

  getClassicProjects = () => {
    request('/list?module=befautyClassicProject&page=1&pageSize=120').then(res => {
      this.setState({classicProjects: res})
    })
  }



  getEnvironments = () => {
    request('/list?module=beautyEnvironmentImage&page=1&pageSize=120').then(res => {
       this.setState({
        environments: res,
       })
    })
  }

  getStoreInfo = () => {
    request('/list?module=beautyStore&page=1&pageSize=120').then(res => {
      this.setState({
        storeInfo: res,
       })
    })
  }

  componentDidMount() {
    this.getCaourselImage();
    this.getClassicProjects();
    this.getEnvironments();
    this.getStoreInfo();
  }
  render () {
    const {
      navImages,
      classicProjects,
      environments,
      storeInfo,
    } = this.state;
    return (
      <div className="home">
        <Nav imgs={navImages}/>
        <div className="content-wrapper">
          <QueueAnim delay={300} className="queue-simple">
            <ClassicsProject key="classics-project" projects={classicProjects}/>
            <AboutCompany key="about-company" />
            <StarGroup key="star-group"/>
            <Environment key="environment"  infos={environments}/>
            <StoreInfo key="store-info" storeInfo={storeInfo}/>
          </QueueAnim>
        </div>
      </div>
    );
  }
}
