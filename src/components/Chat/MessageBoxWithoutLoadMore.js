import './MessageBox.less';

import React, {Component} from 'react';

import MessageItem from './MessageItem';

class MessageBoxWithoutLoadMore extends Component {

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
      <div className="messageBox">
        <div className="messageBoxWrap" >
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

export default MessageBoxWithoutLoadMore
