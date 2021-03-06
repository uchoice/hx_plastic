import './index.less'
import { Component } from 'react'
import {
  Menu,
} from 'antd';
import Link from 'umi/link';

export default class Nav extends Component {
  state = {
    current: '',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  componentDidMount() {
    const path = window.location.hash.substring(2);
    this.setState({
      current: path,
    })
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
          <Link to="/home">首页</Link>
        </Menu.Item>
        <Menu.Item key="cases">
          <Link to="/cases">案例展示</Link>
        </Menu.Item>
        <Menu.Item key="star-project">
          <Link to="/star-project">明星项目</Link>
        </Menu.Item>
        <Menu.Item key="star-doctors">
          <Link to="/star-doctors">明星医师</Link>
        </Menu.Item>
        <Menu.Item key="hx-team">
          <Link to="/hx-team">桦萱团队</Link>
        </Menu.Item>
        <Menu.Item key="tech-training">
          <Link to="/tech-training">技术培训</Link>
        </Menu.Item>
        <Menu.Item key="join-us">
          <Link to="/join-us">招商加盟</Link>
        </Menu.Item>
        <Menu.Item key="contact-us">
          <Link to="/contact-us">联系我们</Link>
        </Menu.Item>
      </Menu>
    </div>
  }
}
