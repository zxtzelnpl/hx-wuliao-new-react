import './ReplayVideoItem.less';

import React, {Component} from 'react';
import {getPoster} from 'utils/tools';

class ReplayVideoItem extends Component {
  render() {
    const {title,url} = this.props;

    return (
      <li className="replay-video-item">
        <a className="replay-video-item-a" target={"_blank"} href={url}>
          <img className="img" src={getPoster()} />
          <p className="sub-title">{title}</p>
        </a>
      </li>
    )
  }
}

export default ReplayVideoItem
