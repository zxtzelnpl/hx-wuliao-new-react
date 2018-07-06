import './MessageBox.less';

import React, {Component} from 'react';
import JRoll from 'jroll';

import MessageItem from './MessageItem';

class MessageBox extends Component {
  constructor(props) {
    super(props)
    this.renderItems = this.renderItems.bind(this);
    this.box = React.createRef();
    this.wrap = React.createRef();
    this.loadMore = React.createRef();
  }

  initialJRoll(){
    let loadMoreH = this.loadMore.current.clientHeight;
    let boxH = this.box.current.clientHeight;
    let wrapH = this.wrap.current.clientHeight;

    let maxY = -(wrapH - boxH - loadMoreH);
    let maxYMore =  -(wrapH - boxH);

    this.box.current.addEventListener('mousewheel',MessageBox.onWheelHandle);

    this.jroll = new JRoll(this.box.current, {
      scrollX:false,
      scrollY:true,
      scrollBarY: 'custom',
      scrollBarFade:false,
      minY:0,
      maxY:maxY
    });

    this.jroll.on('scroll',()=>{
      if(this.jroll.y<maxYMore){
        this.loadMore.current.innerHTML = '加载更多数据';
        this.jroll.maxScrollY = maxYMore;
      }
    })

    /*this.jroll.on('scrollEnd',()=>{
      if(this.jroll.y<maxYMore){
        this.loadMore.current.innerHTML = '加载更多数据';
        this.jroll.maxScrollY = maxYMore;
      }
    })*/
  }

  destoryJRoll(){
    this.box.current.removeEventListener('mousewheel',MessageBox.onWheelHandle);
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
          <div className="scrollUpToLoadMore" ref={this.loadMore}>
            下拉加载更多数据
          </div>
        </div>
      </div>

    )
  }
}

export default MessageBox
