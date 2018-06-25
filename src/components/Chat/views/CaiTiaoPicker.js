import './CaiTiaoPicker.less';

import React, {Component} from 'react';

import {caitiao} from "src/utils/const";

const imgs=[]
for(let i=1;i<=9;i++){
  imgs.push(`${caitiao}${i}.gif`)
}

class CaiTiaoPicker extends Component {
  constructor (){
    super()
    this._render=this._render.bind(this)
  }

  _render(url,index){
    return <img key={index} src={url} onClick={this.props.onClick}/>
  }

  render () {
    let imgs_html = imgs.map(this._render)
    return (
      <div className="caitiaoPikcer">
        {imgs_html}
      </div>
    )
  }
}

export default CaiTiaoPicker
