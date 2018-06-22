import './User.less';

import React, {Component} from 'react';

class User extends Component {
  render() {
    return (
      <div className="user">
        <div className="info">
          <div className="img" />
          <span>Test</span>
        </div>

        <div className="login">
          退出
        </div>
      </div>
    )
  }
}

export default User
