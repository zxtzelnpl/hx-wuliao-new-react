import './SubLink.less';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SubLink extends Component {
  render() {
    const {title, path,url} = this.props;
    return (
      <div className="siderSubLink">
        <Link to={`${url}/${path}`}>
          <p className="siderSubLinkTitle">{title}</p>
        </Link>
      </div>)
  }
}

export default SubLink
