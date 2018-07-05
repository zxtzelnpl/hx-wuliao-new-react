import './Logout.less';

import React, {Component} from 'react';
import propTypes from 'prop-types';

class Logout extends Component {
  render() {

    const {userName,logout} = this.props;

    return (
      <div className="user">
        <div className="info">
          <div className="img" />
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
