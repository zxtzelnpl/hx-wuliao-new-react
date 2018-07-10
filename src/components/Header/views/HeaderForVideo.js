import './Header.less';

import logo from 'src/assets/images/icon_noli_logo_r.png';

import React, {Component} from 'react';
import HomeLink from './HomeLink';
import {User} from 'components/User';

class HeaderForVideo extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} />

        <div className="header-right">

          <HomeLink />

          <div className="blank-width-80" />

          <User />
        </div>
      </div>
    )
  }
}

export default HeaderForVideo;
