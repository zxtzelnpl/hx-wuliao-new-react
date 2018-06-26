import './LinkIcon.less'

import React, {Component} from 'react'
import classNames from 'classnames';

class LinkIcon extends Component {
  render() {

    let className = classNames({
      homeLinkIcon:true,
      white:this.props.white
    })

    return (
      <div className={className}>
        <div className="icon">

        </div>
        <div className="label btn">
          独立量化组
        </div>
      </div>
    )
  }
}

export default LinkIcon
