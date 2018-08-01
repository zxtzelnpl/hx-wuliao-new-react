import './ReplayVideoItem.less';

import React, {Component} from 'react';

import img from 'assets/images/homeVideoShot.jpg';

class ReplayVideoItem extends Component {
  render() {
    const {title,url} = this.props;

    return (
      <li className="replay-video-item">
        <a className="replay-video-item-a" target={"_blank"} href={url}>
          <img className="img" src={img} />
          <p className="sub-title">{title}</p>
        </a>
      </li>
    )
  }
}

export default ReplayVideoItem
