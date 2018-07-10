import './HeadBlankLink.less';

import React, {PureComponent} from 'react';

class HomeLink extends PureComponent {
  render() {
    let dom = null;

    if(this.props.pathname !== '/live'){
      dom = (
        <a className="head-blank-link" href="/build/index.html" target={"_blank"}>
          首页
        </a>
      )
    }

    return dom;
  }
}

export default HomeLink
