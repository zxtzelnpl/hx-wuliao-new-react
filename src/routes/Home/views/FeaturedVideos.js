import './FeaturedVideos.less';

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionTypes} from 'routes/VideoReplay'
import FeaturedVideo from './FeaturedVideo';

class FeaturedVideos extends Component{
  componentDidMount(){
    if(!this.props.data.receivedAt){
      /*this.props.dispatch({
        type:actionTypes.INIT
      })*/
    }
  }

  renderVideos = ()=>{
    console.log(this.props.data)
  }

  render(){
    return (
        <div className="featuredVideoBox">
          <FeaturedVideo />
          <FeaturedVideo />
          <FeaturedVideo />
          <FeaturedVideo />
          <FeaturedVideo />
          <FeaturedVideo />
          <FeaturedVideo />
          <FeaturedVideo />
          <FeaturedVideo />
        </div>
    )
  }
}

const mapStateToProps = state => ({
  data:state.VideoReplay
})

export default connect(mapStateToProps)(FeaturedVideos);