import './MessageBox.less';

import React, {Component} from 'react';
import JRoll from 'jroll';

import MessageItem from './MessageItem';

class MessageBoxWithoutLoadMore extends Component {
  constructor(props) {
    super(props)
    this.renderItems = this.renderItems.bind(this);
    this.box = React.createRef();
    this.wrap = React.createRef();
  }

  initialJRoll = ()=>{
    let boxH = this.box.current.clientHeight;
    let wrapH = this.wrap.current.clientHeight;

    let maxY = -(wrapH - boxH);

    this.box.current.addEventListener('mousewheel',this.onWheelHandle);

    this.jroll = new JRoll(this.box.current, {
      scrollX:false,
      scrollY:true,
      scrollBarY: 'custom',
      scrollBarFade:false,
      minY:0,
      maxY:maxY
    });
  }

  destoryJRoll = ()=>{
    this.box.current.removeEventListener('mousewheel',this.onWheelHandle);
    this.jroll.destroy();
  }

  componentDidMount() {
    this.initialJRoll()
  }

  componentWillUnmount(){
    this.destoryJRoll();
  }

  componentDidUpdate(){

  }

  static onWheelHandle(e){
    e.preventDefault()
  }

  renderItems = ()=>{
    const {list,receivedAt,isFetching} = this.props;
    let dom = <div className="none" />;
    if(typeof list === 'object'){
      dom = list.map(item=>{
        return <MessageItem key={item}/>
      })
    }

    return dom;
  }

  render() {
    return (
      <div className="messageBox" ref={this.box}>
        <div className="messageBoxWrap" ref={this.wrap}>
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

export default MessageBoxWithoutLoadMore
