import './VideoItem.less';
import React, {Component} from 'react';
import poster from 'assets/images/videoItemImg.jpg';

class VideoItem extends Component {


  render() {
    const {url,title,brief} = this.props;

    return (
      <a className="videoItem" href={url} target="_blank">
        <img className="img" src={poster} />
        <div className="subTitle">{title}</div>
        {brief&&<p className="text">{brief}</p>}
      </a>
    )
  }
}

export default VideoItem
