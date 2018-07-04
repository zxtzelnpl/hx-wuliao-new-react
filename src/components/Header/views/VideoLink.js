import './VideoLink.less';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

class VideoLink extends PureComponent {
  render() {
    let dom = null;

    if(this.props.pathname !== '/live'){
      dom = (
        <Link className="header-to-live" to="/live">
          直播间
        </Link>
      )
    }

    return dom;
  }
}

const mapStateToProps = state =>({
  pathname:state.router.location.pathname
})

export default connect(mapStateToProps)(VideoLink)
