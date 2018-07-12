import './MessageBox.less';

import React, {PureComponent} from 'react';
import propTypes from 'prop-types';

import MessageItem from './MessageItem';

class MessageBox extends PureComponent {
  constructor(props) {
    super(props)
    this.renderItems = this.renderItems.bind(this);
    this.box = React.createRef();
    this.wrap = React.createRef();
    this.loadMore = React.createRef();
  }

  renderItems = ()=>{
    const {list} = this.props;
    let dom = <div>暂时没有更多数据</div>;
    if(typeof list === 'object'&&list.length>0){
      dom = list.map((item,index)=>{
        return <MessageItem key={index} {...item}/>
      })
    }

    return dom;
  }

  renderLoadMore = ()=>{
    const {isFetching,hasMore} = this.props;
    let dom;
    if(hasMore){
      if(isFetching){
        dom = <div className={"scrollUpToLoadMore isFetching"} ref={this.loadMore}>
          正在加载数据
        </div>
      }
      else{
        dom = <div className={"scrollUpToLoadMore"} ref={this.loadMore} onClick={this.props.loadMore}>
          点击加载更多数据
        </div>
      }
    }
    else {
      dom = <div className={"no-more"}>已经没有更多数据了</div>
    }
    return dom;
  }

  render() {
    return (
      <div className="messageBox" ref={this.box}>
        <div className="messageBoxWrap" ref={this.wrap}>
          {this.renderItems()}
          {this.renderLoadMore()}
        </div>
      </div>

    )
  }
}

MessageBox.propTypes={
  list:propTypes.array
}

export default MessageBox
