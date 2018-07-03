import './ChatBox.less';
import React, {Component} from 'react'
import MessageBox from 'components/Chat/MessageBox';
import SendBox from 'components/Chat/SendBox';

class ChatBox extends Component {
  render() {
    return (
      <div className="chatBox">
        <MessageBox />
        <div className="blank-height-20" />
        <SendBox />
      </div>
    )
  }
}

export default ChatBox
