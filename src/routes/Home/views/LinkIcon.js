import './LinkIcon.less';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import classNames from 'classnames';

class LinkIcon extends Component {
  render() {
    const {img,text,white,url} = this.props;

    let className = classNames({
      homeLinkIcon:true,
      white:white
    })

    return (
      <Link className={className} to={url}>
        <div className="icon">
          <img className="icon_img" src={img} />
        </div>
        <div className="label btn">
          {text}
        </div>
      </Link>
    )
  }
}

LinkIcon.propTypes={
  img:propTypes.string.isRequired,
  text:propTypes.string.isRequired,
  url:propTypes.string.isRequired,
  white:propTypes.bool
}

export default LinkIcon
