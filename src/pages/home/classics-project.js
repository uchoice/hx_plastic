import Link from 'umi/link'
import BlockTitle from '../../components/block-title';
import React, { Component } from 'react';

const PROJECT_MBWD = require('../../assets/img/project_ycmb.png')
const PROJECT_ZX = require('../../assets/img/project_zx.png')
const PROJECT_PFBY = require('../../assets/img/project_pfby.png')
const PROJECT_PFKS = require('../../assets/img/project_pfks.png')
const PROJECT_KJMF = require('../../assets/img/project_kjmf.png')
const PROJECT_HSDZ = require('../../assets/img/project_hsdz.png')
const PROJECT_JKGL = require('../../assets/img/project_jkgl.png')
const PROJECT_YCMB = require('../../assets/img/project_ycmb.png')

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
    window.onscroll = function()
    {
        var s = document.body.scrollTop || document.documentElement.scrollTop
        if(s>H) {
          classicsProjectDom.classList.add('fixed');
        } else {
          classicsProjectDom.classList.remove('fixed');
        }
    }
  }
  componentDidMount () {
    this.fixed()
  }
  render () {
    return <div ref={this.classicsProject} className="classics-project">
      <BlockTitle title="经典项目" subTitle="Classic project"/>
      <ul className="projects">
        <li className="item">
          <Link to="/">
            <div className="content">
              <img alt="" src={PROJECT_MBWD} className="item-pic" />
              <span className="desc">面部微雕</span>
            </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
          <div className="content">
            <img alt="" src={PROJECT_ZX} className="item-pic" />
            <span className="desc">整形手术</span>
          </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
          <div className="content">
            <img alt="" src={PROJECT_PFBY} className="item-pic" />
            <span className="desc">皮肤保养</span>
          </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
          <div className="content">
            <img alt="" src={PROJECT_PFKS} className="item-pic" />
            <span className="desc">皮肤抗衰</span>
          </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
          <div className="content">
            <img alt="" src={PROJECT_KJMF} className="item-pic" />
            <span className="desc">科技美肤</span>
          </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
          <div className="content">
            <img alt="" src={PROJECT_HSDZ} className="item-pic" />
            <span className="desc">韩式定妆</span>
          </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
          <div className="content">
            <img alt="" src={PROJECT_JKGL} className="item-pic" />
            <span className="desc">健康管理</span>
          </div>
          </Link>
        </li>
        <li className="item">
          <Link to="/">
          <div className="content">
            <img alt="" src={PROJECT_YCMB} className="item-pic" />
            <span className="desc">牙齿美容</span>
          </div>
          </Link>
        </li>
      </ul>
    </div>
  }
}
