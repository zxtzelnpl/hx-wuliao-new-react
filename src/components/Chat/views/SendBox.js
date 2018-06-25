import './SendBox.less';
import React, {Component} from 'react';
import EmojiPicker from './EmojiPicker';
import CaiTiaoPicker from './CaiTiaoPicker';
import moment from 'moment';
import {trim} from 'src/utils/tools';

class SendBox extends Component {
  constructor(props){
    super(props)
    this.state={

    }
    this.emojiShow = this.pickerShow.bind(this,'emoji');
    this.caiTiaoShow = this.pickerShow.bind(this,'caitiao');
  }

  keyUp (e) {
    if (e.keyCode === 13) {
      this.sendMessage()
    }
  }

  sendMessage () {
    let name = this.props.account || 'testtest123'
    let content = this.input.innerHTML
    let time = moment().format('YYYY-MM-DD HH:mm:ss')
    if (name === '') {
      return alert('需要登录后才可发送消息')
    }
    if (trim(content) === '') {
      return alert('您未输入任何内容')
    }

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
    let htmlStr = this.input.innerHTML
    let url = e.target.src
    htmlStr += `<img src=${url} />`
    this.input.innerHTML = htmlStr
  }

  /**caitiao面板**/
  addCaitiao (e) {
    let htmlStr = this.input.innerHTML
    let url = e.target.src
    htmlStr += `<img src=${url} />`
    this.input.innerHTML = htmlStr
  }

  /**上传文件**/
  fileChange (e) {
    let file = e.target
    if (file.value === '') {
      return false
    }
    let img = file.files[0]
      , formData = new FormData()
    formData.append('upload_img', img)

    console.log(formData);

    // fetch(upload_img, {
    //   method: 'POST',
    //   credentials: 'include',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     if (json.status) {
    //       let content = this.input.innerHTML
    //       content += `<img src=${json.img} />`
    //       this.input.innerHTML = content
    //       file.value=''
    //     }
    //     else {
    //       alert('网络连接错误')
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     alert('网络连接错误')
    //   })
  }

  /**聊天框点中清除**/
  chatBoxFoucs () {
    if (this.input.innerHTML === '请输入你想说的话。。。') {
      this.chatBoxClear()
    }
  }

  /**聊天框点中清除**/
  chatBoxClear () {
    this.input.innerHTML = ''
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
            <div className="caitiao" onClick={this.caiTiaoShow}/>
            <div className="pic">
              <label>
                <input
                  type="file"
                  onChange={this.fileChange.bind(this)}/>
              </label>
            </div>
            <div className="send-btn" onClick={this.sendMessage.bind(this)}>
              发送
            </div>
          </div>
        </div>
        <EmojiPicker
            onClick={this.addEmoji.bind(this)}
            show={this.state.picker === 'emoji'}
        />
        <CaiTiaoPicker
            onClick={this.addCaitiao.bind(this)}
            show={this.state.picker === 'caitiao'}
        />
      </div>
    )
  }
}

export default SendBox
