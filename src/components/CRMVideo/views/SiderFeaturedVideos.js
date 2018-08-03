import './SiderFeaturedVideos.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import SiderFeaturedVideo from './SiderFeaturedVideo';
import Loading from 'components/Loading/Loading';


class SiderFeaturedVideos extends Component {
  componentDidMount(){
    if(!this.props.data.receivedAt){
      this.props.dispatch({
        type:actionTypes.INIT
      })
    }
  }

  renderVideos = ()=>{
    const {data} = this.props;
    let dom = null;

    const {isFetching,total,list,receivedAt} =data;
    if(typeof total === 'number'&&typeof list === 'object'&&total!==0){
      dom = list.slice(0,3).map(item=>{
        return <SiderFeaturedVideo key={item.id} {...item}/>
      })
    }

    if(receivedAt&&!isFetching&&total === 0){
      dom = <div className="no-data">暂无数据</div>
    }

    return dom;
  }

  render() {
    const {isFetching} = this.props.data;

    return (
      <div className="sider-featured-videos">
        <p className="sider-featured-videos-title">视频</p>
        <ul className="sider-featured-videos-ul">
          {this.renderVideos()}
          {isFetching&&<Loading />}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data:state.CRMVideo
})

export default connect(mapStateToProps)(SiderFeaturedVideos);
