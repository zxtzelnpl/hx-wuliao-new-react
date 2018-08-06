import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SubLink extends Component {

  render() {
    const {title, path, url, pathname} = this.props;
    let to = `${url}/${path}`;
    let dom;

    if(pathname === to){
      dom = (<li><span className="sider-sub-link-title hint">{title}</span></li>)
    }
    else
    {
      dom = (<li><Link className="sider-sub-link-title" to={`${url}/${path}`}>{title}</Link></li>)
    }
    return dom;
  }

}

export default SubLink
