import './index.less';
import { Component } from 'react';
import CaseBlock from '@/components/case-block';
import { request } from '@/utils';


export default class Cases extends Component {
  state = {
    projects: [],
    cases: []
  }
  init = () => {
    request('/list?module=befautyClassicProject&page=1&pageSize=20').then(projects => {
      console.log('projects:', projects)
      this.setState({
        projects,
      })
    })
    request('/list?module=befautyProjectCase&page=1&pageSize=100').then(cases => {
      console.log('cases:', cases)
      this.setState({
         cases,
       })
    })
  }
  filterCase = (project, cases) => {
    const fiterC = (item) => {
      return item.title === project.title + '_case';
    }
    return cases.filter(fiterC);
  }
  componentDidMount() {
    this.init();
  }
  render () {
    const { projects, cases} = this.state;
    return <div className="cases">
      {projects.map(project => {
        return <CaseBlock
          key={project.id}
          icon={project.icon}
          title={project.title}
          cases= {
            this.filterCase(project, cases)
          }
        />
      })}
    </div>
  }
}
