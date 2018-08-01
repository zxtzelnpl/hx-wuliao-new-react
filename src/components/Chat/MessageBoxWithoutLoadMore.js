import './MessageBox.less';

import React, {Component} from 'react';

import MessageItem from './MessageItem';

class MessageBoxWithoutLoadMore extends Component {

  messageBox = React.createRef()

  componentDidUpdate(preProps){

    if(this.props.list.length!==preProps.list.length){
      this.messageBox.current.scrollTop = this.messageBox.current.scrollHeight
    }

  }

  renderItems = ()=>{
    const {list} = this.props;

    let dom = <div>暂时没有数据</div>;

    if(list.length>0){
      dom = list.map((item,index)=>{
        let info;
        if(typeof item ==='string'){
          info = JSON.parse(item);
        }
        else {
          info = item;
        }

        return <MessageItem key={index} {...info}/>
      })
    }

    return dom;
  }

  render() {
    return (
      <div className="messageBox" ref={this.messageBox}>
        <div className="messageBoxWrap" >
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

export default MessageBoxWithoutLoadMore
