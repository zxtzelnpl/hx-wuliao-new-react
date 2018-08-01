import './SiderFeaturedVideos.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionTypes} from 'routes/Product/VideoReplay'
import FeaturedVideo from './FeaturedVideo';
import Loading from 'components/Loading/Loading'


class SiderFeaturedVideo extends Component {
  componentDidMount(){
    if(!this.props.data.receivedAt||
        this.props.data.team!==this.props.match.params.team||
        this.props.data.child!==this.props.match.params.child
    ){
      this.intList();
    }
  }

  componentDidUpdate(){
    if(this.props.data.team!==this.props.match.params.team||
        this.props.data.child!==this.props.match.params.child
    ){
      this.intList();
    }
  }

  intList = ()=>{
    const {match,data,dispatch} = this.props;
    const {pageSize,currentPage} = data;
    let from = (currentPage-1)*pageSize;
    let to = currentPage*pageSize;

    dispatch({
      type:actionTypes.INIT,
      urlParams:match.params,
      params:{
        from:from,
        to:to,
        sort:'DESC'
      }
    })
  }

  renderPage = ()=>{
    const {data} = this.props;
    let dom = null;

    const {isFetching,total,list,receivedAt} =data;
    if(typeof total === 'number'&&typeof list === 'object'&&total!==0){
      dom = list.slice(0,3).map(item=>{
        return <FeaturedVideo key={item.id} {...item}/>
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
      <div className="sider-featured-video-box">
        <p className="sider-featured-video-title">视频</p>
        <ul className="sider-featured-video-ul">
          {this.renderPage()}
          {isFetching&&<Loading />}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data:state.VideoReplay
})

export default connect(mapStateToProps)(SiderFeaturedVideo);
