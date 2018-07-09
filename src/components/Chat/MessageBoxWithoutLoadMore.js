import './MessageBox.less';

import React, {Component} from 'react';
import JRoll from 'jroll';

import MessageItem from './MessageItem';

class MessageBoxWithoutLoadMore extends Component {
  box = React.createRef();

  initialJRoll = ()=>{
    this.box.current.addEventListener('mousewheel',this.onWheelHandle);

    this.jroll = new JRoll(this.box.current, {
      scrollX:false,
      scrollY:true,
      scrollBarY: 'custom',
      scrollBarFade:false
    });
  }

  destroyJRoll = ()=>{
    this.box.current.removeEventListener('mousewheel',this.onWheelHandle);
    this.jroll.destroy();
  }

  componentDidMount() {
    this.initialJRoll()
  }

  componentWillUnmount(){
    this.destroyJRoll();
  }

  componentDidUpdate(preState){
    if(this.props.list!==preState.list){
      this.jroll.refresh();
    }
  }

  onWheelHandle(e){
    e.preventDefault()
  }

  renderItems = ()=>{
    const {list,receivedAt,isFetching} = this.props;

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
      <div className="messageBox" ref={this.box}>
        <div className="messageBoxWrap" >
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

export default MessageBoxWithoutLoadMore
