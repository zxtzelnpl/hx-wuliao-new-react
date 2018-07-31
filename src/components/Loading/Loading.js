import './Loading.less';

import React, {PureComponent} from 'react';
import refresh from 'assets/images/refresh.png';

class Loading extends PureComponent {
  render() {
    return (
      <div className="loading">
        <img className="loading-img" src={refresh} alt=""/>
      </div>
    )
  }
}

export default Loading
