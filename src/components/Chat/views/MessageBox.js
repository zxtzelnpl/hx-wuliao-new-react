import './MessageBox.less'

import React, {Component} from 'react'
import JRoll from 'jroll';

import MessageItem from './MessageItem'

class MessageBox extends Component {
  constructor(props) {
    super(props)
    this.renderItems = this.renderItems.bind(this);
    this.box = React.createRef();
    this.wrap = React.createRef();
    this.loadBefore = React.createRef();
    this.loadMore = React.createRef();
  }

  initialJRoll(){

    let loadBeforeH = this.loadBefore.current.clientHeight;
    let loadMoreH = this.loadMore.current.clientHeight;
    let boxH = this.box.current.clientHeight;
    let height = this.wrap.current.clientHeight;

    this.box.current.addEventListener('mousewheel',this.onWheelHandle);

    this.jroll = new JRoll(this.box.current, {
      scrollX:false,
      scrollY:true,
      scrollBarY: 'custom',
      scrollBarFade:false,
      minY:loadBeforeH,
      maxY:-(height+loadMoreH-boxH)
    });
    this.jroll.on('scrollEnd',()=>{
      if(this.jroll.y>=loadBeforeH){
        console.log('loadBefore');
        setTimeout(()=>{
          console.log('loaded')
        },1000)
      }
      else if(this.jroll.y>0){
        this.jroll.scrollTo(0,0,300);
      }
      else if(this.jroll.y<=-(height+loadMoreH - boxH)){
        console.log('loadMore');
        setTimeout(()=>{
          console.log('loaded');
        },1000)
      }
      else if(this.jroll.y<-(height-boxH)){
        this.jroll.scrollTo(0,-(height - boxH),300);
      }
    })
  }

  destoryJRoll(){
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

  onWheelHandle(e){
    e.preventDefault()
  }

  renderItems(){
    let array = []
    for(let i = 0;i<20;i++){
      array.push(i)
    }
    return array.map(item=>{
      return <MessageItem key={item}/>
    })
  }

  render() {
    return (
      <div className="messageBoxWrap" >
        <div className="messageBox" ref={this.box}>
          <div className="messageBoxInnerWrap" ref={this.wrap}>
            <div className="scrollDownToLoadBefore" ref={this.loadBefore}>
              LoadBefore
            </div>
            {this.renderItems()}
            <div className="scrollUpToLoadMore" ref={this.loadMore}>
              LoadMore
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default MessageBox
