import './LinkIcon.less'

import React, {Component} from 'react'
import classNames from 'classnames';

class LinkIcon extends Component {
  render() {
    const {img,text} = this.props;

    let className = classNames({
      homeLinkIcon:true,
      white:this.props.white
    })

    return (
      <div className={className}>
        <div className="icon">
          <img className="icon_img" src={img} />
        </div>
        <div className="label btn">
          {text}
        </div>
      </div>
    )
  }
}

export default LinkIcon
