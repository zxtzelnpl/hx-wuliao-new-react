import './Header.less';

import logo from 'src/assets/images/icon_noli_logo_r.png';

import React, {Component} from 'react';
import HeadMenus from './HeadMenus';
import VideoLink from './VideoLink';
import {User} from 'components/User';

class Header extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="header">
        <div className="header-wrap">
          <img className="logo" src={logo} />

          <div className="header-right">

            <HeadMenus />

            <div className="blank-width-10" />

            <VideoLink />

            <div className="blank-width-80" />

            <User />
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
