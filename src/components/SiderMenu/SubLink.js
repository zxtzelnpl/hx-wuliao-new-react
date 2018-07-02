import './SubLink.less';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SubLink extends Component {

  render() {
    const {title, path, url, pathname} = this.props;
    let to = `${url}/${path}`;
    let dom;

    if(pathname === to){
      dom = (<span className="siderSubLinkTitle">{title}</span>)
    }
    else
    {
      dom = (<Link className="siderSubLinkTitle" to={`${url}/${path}`}>{title}</Link>)
    }
    return dom;
  }

}

export default SubLink
