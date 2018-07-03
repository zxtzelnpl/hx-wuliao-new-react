import './Chat.less';
import React, {Component} from 'react';
import PageTitle from 'components/PageTitle/PageTitle'
import MessageBox from 'components/Chat/MessageBox';
import LiveSendBox from 'components/Chat/LiveSendBox';

class Chat extends Component {
  render() {
    return (
      <div className="liveChat">
        <PageTitle title={'留言'}/>
        <MessageBox />
        <div className="blank-height-20" />
        <LiveSendBox />
      </div>
    )
  }
}

export default Chat
