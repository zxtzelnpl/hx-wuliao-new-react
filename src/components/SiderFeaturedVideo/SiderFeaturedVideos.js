import './SiderFeaturedVideos.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionTypes} from 'routes/Product/VideoReplay'
import FeaturedVideo from './FeaturedVideo';


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
    let dom = <div>暂无数据</div>;

    if(typeof data === 'object'){
      const {isFetching,total,list} =data;
      if(typeof total === 'number'&&typeof list === 'object'&&total!==0){
        dom = list.slice(0,3).map(item=>{
          return <FeaturedVideo key={item.id} {...item}/>
        })
      }
    }

    return dom;
  }

  render() {
    return (
      <div className="siderFeaturedVideoBox">
        <p className="siderFeaturedVideoTitle">视频</p>
        <ul>
          {this.renderPage()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data:state.VideoReplay
})

export default connect(mapStateToProps)(SiderFeaturedVideo);
