import './SiderMessageBox.less'

import React, {Component} from 'react';
import MessageBox from './MessageBox';
import SendBox from './SendBox';

class SiderMessageBox extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }


  render() {
    return (
      <div className="siderMessageBox">
        <p className="siderMessageBoxTitle" >留言</p>
        <div className="ul">
          <MessageBox />
          <div className="blank-height-20" />
          <SendBox />
        </div>
      </div>
    )
  }
}

export default SiderMessageBox
