import './FeaturedVideo.less';

import React, {Component} from 'react';

import img from 'assets/images/homeVideoShot.jpg';

class FeaturedVideo extends Component {
  render() {
    const {title,url} = this.props;

    return (
      <li>
        <a className="siderFeaturedVideo" target="_blank" href={url}>
          <img className="img" src={img} />
          <div className="subTitle">
            <span className="name">{title}</span>
          </div>
        </a>
      </li>
    )
  }
}

export default FeaturedVideo
