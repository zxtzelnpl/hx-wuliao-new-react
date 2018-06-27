import './SiderFeaturedVideos.less';

import React, {Component} from 'react';
import FeaturedVideo from './FeaturedVideo';


class SiderFeaturedVideo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="siderFeaturedVideo">
        <p className="siderFeaturedVideoTitle">视频</p>
        <ul>
          <FeaturedVideo />
          <FeaturedVideo />
        </ul>
      </div>
    )
  }
}

export default SiderFeaturedVideo
