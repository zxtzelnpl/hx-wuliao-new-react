import React, {Component} from 'react';

import MessageBox from './MessageBox';
import SendBox from './SendBox';

class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <MessageBox />
        <SendBox />
      </div>
    )
  }
}

export default Chat
