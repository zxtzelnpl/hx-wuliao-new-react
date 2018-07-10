import './FeaturedVideos.less';

import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import FeaturedVideo from './FeaturedVideo';

class FeaturedVideos extends Component{
  componentDidMount(){
    if(!this.props.data.receivedAt){
      this.props.dispatch({
        type:actionTypes.INIT
      })
    }
  }

  renderVideos = ()=>{
    let dom = <div className="no-data">暂无数据</div>

    if(this.props.data.list instanceof Array){
      dom =  this.props.data.list.map(item=>{
        return <FeaturedVideo key={item.id} {...item}/>
      })
    }

    return dom;
  }

  render(){
    return (
        <div className="featuredVideoBox">
          {this.renderVideos()}
        </div>
    )
  }
}

const mapStateToProps = state => ({
  data:state.CRMVideo
})

export default connect(mapStateToProps)(FeaturedVideos);
