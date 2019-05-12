import './index.less'
import { Component } from 'react';
import { request } from '@/utils';
import CaseBlock from '@/components/case-block';

export default class HxTeam extends Component{
  state = {
    hxTeamArr: []
  }
  group = (array, subGroupLength) => {
    let index = 0;
    let newArray = [];
    while (index < array.length) {
      newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
  }
  getHxTeamPics = () => {
    request('/list?module=beautyhxTeam&page=1&pageSize=40').then(res => {
      this.setState({
        hxTeamArr: this.group(res, 2),
      })
    })
  }
  componentDidMount() {
    this.getHxTeamPics();
  }
  render () {
    const { hxTeamArr } = this.state;
    return <div className="team">
      {hxTeamArr.map((arr, index) =><CaseBlock
          key={index}
          cases= {
            [...arr]
          }
        />
      )}
    </div>
  }
}
