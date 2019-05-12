import { Component } from 'react';
import  { request } from '@/utils';
import './index.less';

export default class ProjectInfo extends Component {
  state = {
    res: {},
  }
  componentDidMount() {
    const { location: { query: { id }}} = this.props;
    this.getProjectInfo(id);
  }

  getProjectInfo = (id) => {
    request(`/detail?id=${id}`).then(res => {
      this.setState({
        res,
      })
    })
  }
  render() {
    const { res } = this.state;
    const createMarkup = () => ({ __html: res.content });
    return <div className="project-info">
        <h1 className="title">{res.title}</h1>
        <div className="content" dangerouslySetInnerHTML={ createMarkup() } />
      </div>
  }
}
