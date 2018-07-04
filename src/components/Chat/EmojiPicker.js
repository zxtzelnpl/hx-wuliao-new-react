import './EmojiPicker.less';

import React, {Component} from 'react';
import classNames from 'classnames';
import {emoji} from "src/utils/const";

const emojis=[]
for(let i=1;i<=50;i++){
  emojis.push(`${emoji}${i}.jpg`)
}

class EmojiPicker extends Component {
  constructor (){
    super()
    this._render=this._render.bind(this)
  }

  _render(url,index){
    return <img className="emoji-one" key={index} src={url} onClick={this.props.onClick}/>
  }

  render () {
    let emojis_imgs = emojis.map(this._render);
    let className = classNames({
      emojiPicker:true,
      show:this.props.show
    })
    return (
        <div className={className}>
          {emojis_imgs}
        </div>
    )
  }
}

export default EmojiPicker
