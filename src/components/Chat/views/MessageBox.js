import './MessageBox.less'

import React, {Component} from 'react'
import JRoll from 'jroll';

import MessageItem from './MessageItem'

class MessageBox extends Component {
  constructor(props) {
    super(props)
    this.renderItems = this.renderItems.bind(this);
    this.box = React.createRef();
  }

  componentDidMount() {

    this.box.current.addEventListener('mousewheel',this.onWheelHandle);

    this.jroll = new JRoll(this.box.current, {
      scrollX:false,
      scrollY:true,
      scrollBarY: true,
      scrollBarFade:true
    });
  }

  componentWillUnmount(){
    this.box.current.removeEventListener('mousewheel',this.onWheelHandle);
    this.jroll.destroy();
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
          <div className="messageBoxInnerWrap">
            {this.renderItems()}
          </div>
        </div>
      </div>

    )
  }
}

export default MessageBox
