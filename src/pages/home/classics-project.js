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
    return <div ref={this.classicsProject} className="classics-project">
      <BlockTitle title="经典项目" subTitle="Classic project" />
      <ul className="projects">
        <li className="item">
          <Link to="/">
            <div className="content">
              <span className="icon huaxuan huaxuaniconplastic"></span>
              <span className="desc">面部微雕</span>
            </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
            <div className="content">
              <span className="icon huaxuan huaxuaniconplastic_push"></span>
              <span className="desc">整形手术</span>
            </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
            <div className="content">
              <span className="icon huaxuan huaxuaniconsmile"></span>
              <span className="desc">皮肤保养</span>
            </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
            <div className="content">
              <span className="icon huaxuan huaxuaniconwrinkle"></span>
              <span className="desc">皮肤抗衰</span>
            </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
            <div className="content">
              <span className="icon huaxuan huaxuaniconaid_packet"></span>
              <span className="desc">科技美肤</span>
            </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
            <div className="content">
              <span className="icon huaxuan huaxuaniconbeauty"></span>
              <span className="desc">韩式定妆</span>
            </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
            <div className="content">
              <span className="icon huaxuan huaxuanicondoctor"></span>
              <span className="desc">健康管理</span>
            </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
            <div className="content">
              <span className="icon huaxuan huaxuaniconteeth"></span>
              <span className="desc">牙齿美容</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  }
}
