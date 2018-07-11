import './MessageItem.less'

import React, {Component} from 'react';
import moment from 'moment';

import userImg from 'assets/images/user.png';

class MessageItem extends Component {
  render() {
    const {time,content,name,timestamp} = this.props;
    return (
      <div className="messageItem">
        <div className="messageUserInfo">
          <img className="img" src={userImg} alt=""/>
          <span className="name">{name}</span>
          <span className="time">{time?time:moment.unix(timestamp).format('YYYY-MM-DD HH:mm')}</span>
        </div>
        <div className="message" dangerouslySetInnerHTML={{__html:content}}/>
      </div>
    )
  }
}

export default MessageItem
