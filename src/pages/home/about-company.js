import React, { Component } from 'react'
import BlockTitle from '../../components/block-title';
const VIDEO_COVER = require('../../assets/img/video_cover.png');
export default class AboutCompany extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  state ={
    controls: ''
  }
  clickVideo = () => {
    console.log(this.videoRef);
    this.setState({
      controls: 'controls'
    }, () => {
      this.videoRef.current.play()
    })
  }
  render () {
    const { controls } = this.state;
    return <div className="about-company">
      <div className="video-wrapper">
        <video
          onClick={this.clickVideo}
          className="about-company-video"
          loop
          ref={this.videoRef}
          poster={!controls ? VIDEO_COVER : ''}
          controls={controls}
        >
          <source src="https://os.alipayobjects.com/rmsportal/CoDFvoxaQpTnLOM.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text-wrapper">
        <BlockTitle title="公司简介" subTitle="About company"/>
        <div className="content">
          桦萱医疗整形团队成立于2013年，追随中国整形外科发展的潮流，汇集了国内外一流整形外科的精髓，把西方的先进技术和中国的审美完美结合，秉承“诚信、安全、精美”的品牌理念，积极探索和传播新的时代需求与审美标准。桦萱坐落于成都市锦江区宏济上路140号，占地面积 600 平米，是一家专业全方位医美运营机构。
        </div>
      </div>
    </div>
  }
}
