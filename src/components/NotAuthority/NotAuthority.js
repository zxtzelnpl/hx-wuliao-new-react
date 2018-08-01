import './NotAuthority.less'
import React, {Component} from 'react'


class NotAuthority extends Component {
  render() {
    const className = "not-authority";

    return (
      <div className={className}>
        <div className={`${className}-img`} />
        <div className={`${className}-info`} >
          <h2 className={`${className}-info-h2`}>401</h2>
          <p className={`${className}-info-p`}>抱歉，你无权访问该页面</p>
          <p className={`${className}-info-p`}>请登录后访问，谢谢</p>
          <p className={`${className}-info-p`}>{this.props.location.pathname}</p>
          <p className={`${className}-info-p`}>{process.env.NODE_ENV}</p>
        </div>
      </div>
    )
  }
}

export default NotAuthority
