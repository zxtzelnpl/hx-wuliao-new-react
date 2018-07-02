import './VideoItem.less';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class VideoItem extends Component {


  render() {
    const {poster,videoSrc,title,brief} = this.props;

    return (
      <div className="videoItem" to={videoSrc}>
        <img className="img" src={poster} />
        <div className="subTitle">{title}</div>
        <p className="text">{brief}</p>
      </div>
    )
  }
}

export default VideoItem
