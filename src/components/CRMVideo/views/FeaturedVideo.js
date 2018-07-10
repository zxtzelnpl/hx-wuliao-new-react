import './FeaturedVideo.less';

import React, {Component} from 'react';


import img from 'assets/images/homeVideoShot.jpg';

class FeaturedVideo extends Component {

  render() {
    const {title,url} = this.props;

    return (
      <a className="homeFeaturedVideo" target={"_blank"} href={url}>
        <img className="img" src={img} />
        <div className="subTitle">{title}</div>
        {/*<p className="text">年末六大指数普遍小涨，中小创反弹幅度较大，放量萎缩</p>*/}
      </a>
    )
  }
}

export default FeaturedVideo;
