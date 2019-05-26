import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import './index.less';
import router from 'umi/router';
import 'rc-banner-anim/assets/index.css';

export default class Nav extends Component{
  gotoDetail = (id) => {
    router.push(`/project-info?id=${id}`)
  }
  render () {
    const { imgs } = this.props
    return <div className="nav-wrapper">
      <BannerAnim
        prefixCls="nav"
        dragPlay={false}
        arrow={false}
        autoPlay
      >
        {imgs && imgs.map((img, index) => <Element
          key={`img-${index}`}
          onClick={() => this.gotoDetail(img.id)}
          style={{
            backgroundImage: `url(${img.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        )}
      </BannerAnim>
    </div>
  }
  }
