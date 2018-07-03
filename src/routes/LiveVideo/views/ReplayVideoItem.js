import './ReplayVideoItem.less';

import React, {Component} from 'react';

import img from 'assets/images/homeVideoShot.jpg';

class ReplayVideoItem extends Component {
  render() {
    return (
      <li>
        <div className="replayVideoItem">
          <img className="img" src={img} />
          <p className="subTitle">视频名称</p>
          <p className="datetime">12-30 13:12</p>
        </div>
      </li>
    )
  }
}

export default ReplayVideoItem
