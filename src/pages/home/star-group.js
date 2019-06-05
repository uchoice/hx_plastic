import { Component } from 'react';
import { request } from '@/utils';
import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';


export default class StarGroup extends Component {
  state = {
    left: 0,
    starDoctors: []
  }
  init = () => {
    request('/list?module=beautyStarDoctor&page=1&pageSize=120').then(res => {
      const doctors = res ? res.map(item => item.image) : []
      const starDoctors = doctors/* .concat(doctors).concat(doctors); */
    this.setState({
      /* left: -20 * doctors.length, */
      starDoctors
    })
    })
  }
  componentDidMount() {
    this.init()
  }
  caculateDistance = (flag) => {
    const { left, starDoctors } = this.state;
    let caculateLeft = left;
    caculateLeft = left + 20 * flag
    if (!(left === 0 && flag ===  1 || left === -(starDoctors.length - 5) * 20 && flag === -1)) {
      this.setState({
        left: caculateLeft
      })
    }
  }
  render() {
    const { left, starDoctors } = this.state;
    return <div className="star-group">
      <OverPack playScale={0.05}>
        <QueueAnim delay={600}>
          <hgroup key="star-group-title" className="title-wrapper">
            <h1 className="title">明星团队</h1>
            <h2 className="sub-title">Star Group</h2>
          </hgroup>
          <div key="star-group-content" className="doctors-wrapper">
            <span className="icon huaxuan huaxuaniconprevious" onClick={() => this.caculateDistance(1)}/>
              <div className="shelter">
                <ul style={{transition:'all 1s ease', transform: `translate(${left}%)`}}>
                  {
                    starDoctors.map((doctor, index) => <li key={`doctor-${index}`}><img alt="" src={doctor} /></li>)
                  }
                </ul>
              </div>
            <span className="icon huaxuan huaxuaniconnext" onClick={() => this.caculateDistance(-1)}/>
          </div>
        </QueueAnim>
      </OverPack>
    </div>
  }
}
