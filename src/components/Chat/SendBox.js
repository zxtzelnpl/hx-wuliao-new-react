import './SendBox.less';
import React, {Component} from 'react';
import EmojiPicker from './EmojiPicker';

class SendBox extends Component {
  constructor(props){
    super(props)
    this.state={

    }
    this.emojiShow = this.pickerShow.bind(this,'emoji');
  }

  keyUp (e) {
    if (e.keyCode === 13) {
      this.sendMessage();
    }
  }

  sendMessage = () => {
    let content = this.input.innerHTML
    this.props.sendMessage(content);
    this.chatBoxClear();
  }

  /**彩条面板和emoji面板交换显示**/
  pickerShow (picker) {
    this.setState((state) => {
      let prePicker = state.picker
      let nextPicker = ''
      if (picker !== prePicker) {
        nextPicker = picker
      }
      return {
        picker: nextPicker
      }
    })
  }

  /**emoji面板**/
  addEmoji (e) {
    this.chatBoxFoucs();
    let htmlStr = this.input.innerHTML
    let url = e.target.src
    htmlStr += `<img src=${url} />`
    this.input.innerHTML = htmlStr
  }

  /**聊天框点中清除**/
  chatBoxFoucs () {
    if (this.input.innerHTML === '请输入你想说的话。。。') {
      this.chatBoxClear();
    }
  }

  /**聊天框点中清除**/
  chatBoxClear () {
    this.input.innerHTML = '';
  }

  render() {
    return (
      <div className="sendBoxWrap">
        <div className="sendBox">
          <div
            className="inputBox"
            contentEditable={true}
            dangerouslySetInnerHTML={{__html: '请输入你想说的话。。。'}}
            ref={input => {this.input = input}}
            onKeyUp={this.keyUp.bind(this)}
            onFocus={this.chatBoxFoucs.bind(this)}
          />
          <div className="toolbar">
            <div className="emoji" onClick={this.emojiShow}/>
            <div className="send-btn" onClick={this.sendMessage}>
              发送
            </div>
          </div>
        </div>
        <EmojiPicker
            onClick={this.addEmoji.bind(this)}
            show={this.state.picker === 'emoji'}
        />
      </div>
    )
  }
}

export default SendBox
