import './Logout.less';

import React, {Component} from 'react';

class Logout extends Component {
  render() {
    return (
      <div className="user">
        <div className="info">
          <div className="img" />
          <span>Test</span>
        </div>

        <div className="loginOut btn">
          退出
        </div>
      </div>
    )
  }
}

export default Logout