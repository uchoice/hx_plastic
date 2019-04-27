import Link from 'umi/link'
import BlockTitle from '../../components/block-title';
import React, { Component } from 'react';


export default class ClassicsProject extends Component {
  constructor(props) {
    super(props);
    this.classicsProject = React.createRef();
  }
  fixed = () => {
    const classicsProjectDom = this.classicsProject.current;
    let H = 0, Y = classicsProjectDom;
    while (Y) {
      H += Y.offsetTop;
      Y = Y.offsetParent;
    }
    window.onscroll = function () {
      var s = document.body.scrollTop || document.documentElement.scrollTop
      if (s > H) {
        classicsProjectDom.classList.add('fixed');
      } else {
        classicsProjectDom.classList.remove('fixed');
      }
    }
  }
  componentDidMount() {
    this.fixed()
  }
  render() {
    const {projects} = this.props;
    return <div ref={this.classicsProject} className="classics-project">
      <BlockTitle title="经典项目" subTitle="Classic project" />
      <ul className="projects">
      {
        projects.map(project => <li key={project.id} className="item">
          <Link to={`/project-info?id=${project.id}`}>
            <div className="content">
              <img className="project-icon" alt="" src={project.icon} />
              <span className="desc">{project.title}</span>
            </div>
          </Link>
        </li>)
      }
      </ul>
    </div>
  }
}
