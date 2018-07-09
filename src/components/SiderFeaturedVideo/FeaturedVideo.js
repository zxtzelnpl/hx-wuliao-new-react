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
            {/*<span className="datetime">12-30 13:12</span>*/}
          </div>
        </a>
      </li>
    )
  }
}

export default FeaturedVideo
