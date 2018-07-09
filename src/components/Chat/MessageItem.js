import './MessageItem.less'

import React, {Component} from 'react';

import userImg from 'assets/images/user.jpg';

class MessageItem extends Component {
  render() {
    const {time,content,name} = this.props;
    return (
      <div className="messageItem">
        <div className="messageUserInfo">
          <img className="img" src={userImg} alt=""/>
          <span className="name">{name}</span>
          <span className="time">{time}</span>
        </div>
        <div className="message" dangerouslySetInnerHTML={{__html:content}}/>
      </div>
    )
  }
}

export default MessageItem
