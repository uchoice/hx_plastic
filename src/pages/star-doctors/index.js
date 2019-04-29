import './index.less'
import { Component } from 'react';
import { request } from '@/utils';

export default class StarDoctor extends Component {
  state = {
    starDoctorsArr: []
  }
  group = (array, subGroupLength) => {
    let index = 0;
    let newArray = [];
    while (index < array.length) {
      newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
  }
  getStarProject = () => {
    request('/list?module=beautyStarDoctor&page=1&pageSize=40').then(res => {
      this.setState({
        starDoctorsArr: this.group(res, 4),
      })
    })
  }
  componentDidMount() {
    this.getStarProject();
  }
  render() {
    const { starDoctorsArr } = this.state;
    return <div className="star-doctor">
      {starDoctorsArr.map((array, index) =>
        <div key={'wraper' + index} className="doctors">
          {array.map(item => <div className="doctor-info">
            <img key={item.id} alt="" src={item.image} />
            {item.title}
          </div>)}
        </div>
      )}

    </div>
  }
}
