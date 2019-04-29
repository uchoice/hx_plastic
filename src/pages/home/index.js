import './index.less';
import { Component  } from 'react';
import Nav from '../../components/nav';
import ClassicsProject from './classics-project';
import StarGroup  from './star-group';
import Environment from './environment';
import AboutCompany from './about-company';
import StoreInfo from './store-info';
import { request } from '@/utils';

export default class Home extends Component {
  state = {
    navImages: [],
    classicProjects: [],
    environments: [],
  }
  getCaourselImage = () => {
    request('/list?module=beautyCarouselImage&page=1&pageSize=20').then(res => {
      const navImages = res ? res.map(item => item.image) : []
      this.setState({navImages})
    })
  }

  getClassicProjects = () => {
    request('/list?module=befautyClassicProject&page=1&pageSize=20').then(res => {
      this.setState({classicProjects: res})
    })
  }



  getEnvironments = () => {
    request('/list?module=beautyEnvironmentImage&page=1&pageSize=20').then(res => {
       this.setState({
        environments: res,
       })
    })
  }

  getStoreInfo = () => {
    request('/view/artical/list/module/beautyStore').then(res => {

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
    } = this.state;
    return (
      <div className="home">
        <Nav imgs={navImages}/>
        <div className="content-wrapper">
          <ClassicsProject projects={classicProjects}/>
          <AboutCompany />
          <StarGroup/>
          <Environment infos={environments} />
          <StoreInfo />
        </div>
      </div>
    );
  }
}
