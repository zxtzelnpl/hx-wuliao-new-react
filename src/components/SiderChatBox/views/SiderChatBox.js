import './SiderChatBox.less'

import React, {Component} from 'react';
import ChatBox from './ChatBox'

class SiderChatBox extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="siderChatBox">
        <p className="siderChatBoxTitle" >留言</p>
        <ChatBox />
      </div>
    )
  }
}

export default SiderChatBox
