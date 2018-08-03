import React, {PureComponent} from 'react';
import {getPoster} from 'utils/tools';

class SiderFeaturedVideo extends PureComponent {
  render() {
    const {title,url} = this.props;

    return (
      <li>
        <a className="sider-featured-videos-box" target="_blank" href={url}>
          <img className="img" src={getPoster()} />
          <div className="subTitle">
            <span className="name">{title}</span>
          </div>
        </a>
      </li>
    )
  }
}

export default SiderFeaturedVideo
