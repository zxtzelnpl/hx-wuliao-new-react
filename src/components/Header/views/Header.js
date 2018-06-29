import './Header.less';

import logo from 'src/assets/images/icon_noli_logo_r.png';

import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import HeadMenus from './HeadMenus';
import {User, Login} from 'components/User';

class Header extends Component {

  onHandleSelect = (id)=>{
    console.log('this.onHandleSelect: '+id)
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} />

        <div className="header-right">

          <HeadMenus onSelect={this.onHandleSelect}/>

          <div className="blank-width-10" />

          <Link className="header-to-live" to="/live">
            直播间
          </Link>

          <div className="blank-width-80" />

          <User />
        </div>
      </div>
    )
  }
}


const mapStateToProps=(state)=>{
  return {
    state
  }
}

export default connect(mapStateToProps)(Header);
