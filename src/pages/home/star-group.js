import { Component } from 'react';
import { request } from '@/utils';

export default class StarGroup extends Component {
  state = {
    left: -20,
    needTransition: true,
    starDoctors: []
  }
  init = () => {
    request('/list?module=beautyStarDoctor&page=1&pageSize=120').then(res => {
      const doctors = res ? res.map(item => item.image) : []
      const starDoctors = doctors.concat(doctors).concat(doctors);
    this.setState({
      left: -20 * doctors.length,
      starDoctors
    })
    })
  }
  componentDidMount() {
    this.init()
  }
  caculateDistance = (flag) => {
    const { left } = this.state;
    let caculateLeft = left;
    caculateLeft = left + 20 * flag
    if (left === 0 && flag ===  1) {
      this.setState({
        left: caculateLeft
      }, () => {
        this.setState( ()=> {
          this.setState({
            needTransition: false,
            left: -20 * 5
          })
        })
      })
    } else if (left === -200 && flag === -1) {
      this.setState({
        left: caculateLeft
      }, () => {
        this.setState( ()=> {
          this.setState({
            needTransition: false,
            left: -20 * 5
          })
        })
      })
    } else {
      this.setState({
        needTransition: true,
        left: caculateLeft
      })
    }
  }
  render() {
    const { left, needTransition, starDoctors } = this.state;
    return <div className="star-group">
      <hgroup className="title-wrapper">
        <h1 className="title">明星团队</h1>
        <h2 className="sub-title">Star Group</h2>
      </hgroup>
      <div className="doctors-wrapper">
        <span className="icon huaxuan huaxuaniconprevious" onClick={() => this.caculateDistance(1)}/>
          <div className="shelter">
            <ul style={{transition:needTransition ? 'all 1s ease' : '', transform: `translate(${left}%)`}}>
              {
                starDoctors.map((doctor, index) => <li key={`doctor-${index}`}><img alt="" src={doctor} /></li>)
              }
            </ul>
        </div>
        <span className="icon huaxuan huaxuaniconnext" onClick={() => this.caculateDistance(-1)}/>
      </div>
    </div>
  }
}
