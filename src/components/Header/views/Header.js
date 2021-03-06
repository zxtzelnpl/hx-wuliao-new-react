import './Header.less';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HeadMenusTwo from './HeadMenusTwo';
import VideoLink from './VideoLink';
import {User} from 'components/User';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="header-wrap">
          <Link to={'/'}>
            <img className="logo" src={"/assets/react/icon_noli_logo_r.png"} />
          </Link>

          <div className="header-right">

            <HeadMenusTwo />

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
