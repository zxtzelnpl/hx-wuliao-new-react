import './MessageItem.less'

import React, {Component} from 'react';

import userImg from 'assets/images/user.jpg';

class MessageItem extends Component {
  render() {
    return (
      <div className="messageItem">
        <div className="messageUserInfo">
          <img className="img" src={userImg} alt=""/>
          <span className="name">Text</span>
          <span className="time">2018.06.05 16:20</span>
        </div>
        <div className="message">
          刚刚进入
        </div>
      </div>
    )
  }
}

export default MessageItem
