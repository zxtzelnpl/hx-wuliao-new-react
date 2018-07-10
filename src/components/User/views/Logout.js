import './Logout.less';

import React, {Component} from 'react';
import propTypes from 'prop-types';
import user_png from 'assets/images/user.png';

class Logout extends Component {
  render() {

    const {userName,logout} = this.props;

    return (
      <div className="user">
        <div className="info">
          <img className="img" src={user_png}/>
          <span>{userName}</span>
        </div>

        <div className="loginOut btn" onClick={logout}>
          退出
        </div>
      </div>
    )
  }
}

Logout.propTypes = {
  userName:propTypes.string.isRequired,
  logout:propTypes.func.isRequired
}

export default Logout
