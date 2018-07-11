import './ReplyVideo.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import ReplayVideoItem from './ReplayVideoItem';

import refresh from 'assets/images/refresh.png';

class ReplyVideo extends Component{
  componentDidMount(){
    if(!this.props.data.receivedAt){
      this.props.dispatch({
        type:actionTypes.INIT
      })
    }
  }

  renderVideoItem = ()=>{
    let dom = <div className="no-data">暂无数据</div>

    if(this.props.data.list instanceof Array){
      dom =  this.props.data.list.map(item=>{
        return <ReplayVideoItem key={item.id} {...item}/>
      })
    }

    return dom;
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

const mapStateToProps = state => ({
  data:state.CRMVideo
})

export default connect(mapStateToProps)(ReplyVideo);
