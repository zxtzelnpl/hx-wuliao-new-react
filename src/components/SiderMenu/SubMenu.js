import './SubMenu.less'

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class subMenu extends Component {
  constructor(props) {
    super(props);
  }

  renderList(title, lis) {
    let list = lis.map((li, index) => {
      return <li className="siderSubMenuLi" key={index}><Link to={li.path}>{li.name}</Link></li>
    })

    return (
      <div className="siderSubMenu">
        <p className="siderSubMenuTitle">{title}</p>
        <ul>
          {list}
        </ul>
      </div>);
  }

  renderLabel(title, path) {
    return (
      <div className="siderSubMenu">
        <Link to={path}>
          <p className="siderSubMenuTitle">{title}</p>
        </Link>
      </div>)
  }

  render() {
    const {title, lis, path} = this.props;
    let dom
    if (typeof lis === 'object') {
      dom = this.renderList(title, lis)
    }
    else if(typeof path === 'string'){
      dom = this.renderLabel(title,path)
    }

    return dom
  }
}

export default subMenu
