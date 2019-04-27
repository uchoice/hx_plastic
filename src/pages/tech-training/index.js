import { Component } from 'react';
import TechTraining from './tech-training-block';
import { request } from '@/utils';
import './index.less';

export default class TechTrainings extends Component {
  state = {
    TechTrainings: [],
  }
  getHxTeamPics = () => {
    request('/view/artical/list/module/beautyTechPx').then(res => {
      this.setState({
        TechTrainings: res,
      })
    })
  }
  componentDidMount() {
    this.getHxTeamPics();
  }
  render () {
    const { TechTrainings } = this.state;
    return <div className="tech-training">
    {TechTrainings.map(item => <TechTraining
        title={item.title}
        icon={item.icon}
        img={item.image}
        desc={item.intro}
    />)}
    </div>
  }
}
