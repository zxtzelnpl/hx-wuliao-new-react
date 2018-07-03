import './ReplyVideo.less';
import React, {Component} from 'react';
import ReplayVideoItem from './ReplayVideoItem';

import refresh from 'assets/images/refresh.png';

const datas = [];
for(let i = 0;i<3;i++){
  datas.push({
    id:`id${i}`,
    title:'视频名称',
    datatime:'2018.06.21'
  })
}


class ReplyVideo extends Component{

  renderVideoItem = ()=>{
    return datas.map(data=>{
      return <ReplayVideoItem {...data}/>
    })
  }

  render(){
    return (
      <div className="replayVideo">
        <div className="refresh">
          <img className="refreshImg" src={refresh} alt=""/>
          <span className="refreshText">
             往期回顾
          </span>
        </div>
        <div className="triangle" />
        <ul className="videoItemBoxes">
          {this.renderVideoItem()}
        </ul>
      </div>
    )
  }
}

export default ReplyVideo;
