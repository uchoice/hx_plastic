import { Component } from 'react';

const DOCTOR_01 = require('@/assets/img/doctor_01.png');
const DOCTOR_02 = require('@/assets/img/doctor_02.png');
const DOCTOR_03 = require('@/assets/img/doctor_03.png');
const DOCTOR_04 = require('@/assets/img/doctor_04.png');
const DOCTOR_05 = require('@/assets/img/doctor_05.png');

const DOCTOR_LIST = [
  DOCTOR_01,
  DOCTOR_02,
  DOCTOR_03,
  DOCTOR_04,
  DOCTOR_05,
  DOCTOR_01,
]

export default class StarGroup extends Component {
  state = {
    left: 0,
  }
  caculateDistance = (flag) => {
    const { left } = this.state;
    let caculateLeft = left;
    caculateLeft = left + 280 * flag
    this.setState({
      left: caculateLeft
    })
  }
  render() {
    const { left } = this.state;
    return <div className="star-group">
      <hgroup className="title-wrapper">
        <h1 className="title">明星团队</h1>
        <h2 className="sub-title">Star Group</h2>
      </hgroup>
      <div className="doctors-wrapper">
        <span className="icon huaxuan huaxuaniconprevious" onClick={() => this.caculateDistance(1)}/>
        <div className="shelter">
          <ul style={{width:`${DOCTOR_LIST.length * 280}px`, left: `${left}px`,transition:'all 1s ease'}}>
            {
              DOCTOR_LIST.map((doctor, index) => <li key={`doctor-${index}`}><img alt="" src={doctor} /></li>)
            }
          </ul>
        </div>
        <span className="icon huaxuan huaxuaniconnext" onClick={() => this.caculateDistance(-1)}/>
      </div>
    </div>
  }
}
