import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import HomeFeaturedVideoBox from './HomeFeaturedVideoBox';

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
    const {className,data} = this.props;

    if(data.list instanceof Array){
      dom =  data.list.map(item=>{
        return <HomeFeaturedVideoBox className={`${className}-box`} key={item.id} {...item}/>
      })
    }

    return dom;
  }

  render(){
    const {className} = this.props;

    return (
        <div className={className}>
          {this.renderVideos()}
        </div>
    )
  }
}

const mapStateToProps = state => ({
  data:state.CRMVideo
})

export default connect(mapStateToProps)(FeaturedVideos);
