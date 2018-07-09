import './FeaturedVideo.less';

import React, {Component} from 'react';


import img from 'assets/images/homeVideoShot.jpg';

class FeaturedVideo extends Component {

  render() {
    return (
      <div className="homeFeaturedVideo">
        <img className="img" src={img} />
        <div className="subTitle">视频名称</div>
        <p className="text">年末六大指数普遍小涨，中小创反弹幅度较大，放量萎缩</p>
      </div>
    )
  }
}

export default FeaturedVideo;
