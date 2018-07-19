import './ReasonBox.less';
import React, {Component} from 'react'
import {createPortal} from 'react-dom';


class ReasonBox extends Component {

  render() {
    const root = document.querySelector('.stockTable');
    const {reason,onClick,style} = this.props;

    if(root.nodeName==='DIV'){
      return createPortal(
        <div className="reason-box" style={style}>
          <div className="reason-box-text">
            {reason}
          </div>
          <div className="reason-box-button" onClick={onClick}>
            确认
          </div>
        </div>,
        root
      )
    }
    else{
      return null;
    }
  }
}

export default ReasonBox
