import { Component } from 'react';
import TechTraining from './tech-training-block';
import { request } from '@/utils';
import './index.less';

export default class TechTrainings extends Component {
  state = {
    TechTrainings: [],
  }
  getHxTeamPics = () => {
    request('/list?module=beautyTechPx&page=1&pageSize=100').then(res => {
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
    {TechTrainings.map((item, index) => <TechTraining
        key={index}
        title={item.title}
        icon={item.icon}
        img={item.image}
        desc={item.intro}
    />)}
    </div>
  }
}
