import './index.less'
import { Component } from 'react'
import {
  Menu,
} from 'antd';

export default class Nav extends Component {
  state = {
    current: 'home',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render () {
    return <div className="nav-bar">
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        theme="dark"
        mode="horizontal"
      >
        <Menu.Item key="home">
          首页
        </Menu.Item>
        <Menu.Item key="cases">
          案例展示
        </Menu.Item>
        <Menu.Item key="star-project">
          明星项目
        </Menu.Item>
        <Menu.Item key="star-doctor">
          明星医师
        </Menu.Item>
        <Menu.Item key="xuanhua-team-member">
          桦萱团队
        </Menu.Item>
        <Menu.Item key="tech-train">
          技术培训
        </Menu.Item>
        <Menu.Item key="attract-investment">
          招商加盟
        </Menu.Item>
        <Menu.Item key="contact-us">
          联系我们
        </Menu.Item>
      </Menu>
    </div>
  }
}
