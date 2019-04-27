import { Component } from 'react';
import StarProjectBlock from './star-project-block';
import { request } from '@/utils';
import './index.less';

export default class StarProject extends Component {
  state = {
    starProjects: []
  }
  getStarProject = () => {
    request('/list?module=befautyClassicProject&page=1&pageSize=20').then(res => {
      this.setState({
        starProjects: res,
      })
    })
  }
  componentDidMount() {
    this.getStarProject();
  }
  render () {
    const { starProjects } = this.state;
    return <div className="star-project">
      {starProjects.map(item => <StarProjectBlock
        key={item.id}
        id={item.id}
        title={item.title}
        icon={item.icon}
        img={item.image}
        desc={item.intro}
      />)}
    </div>
  }
}
