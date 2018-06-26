import './SiderFeaturedVideos.less';

import React, {Component} from 'react';
import FeaturedVideo from './FeaturedVideo';


class SiderFeaturedVideo extends Component {
  constructor(props){
    super(props);
    this.handleUlShow = this.handleUlShow.bind(this);
    this.ul = React.createRef();
    this.height;
    this.state={
      height:'auto'
    }
  }

  componentDidMount(){
    this.height = this.ul.current.clientHeight;
    this.setState({
      height:this.height
    })
  }

  handleUlShow(){
    this.setState(({height})=>{
      let _height = height === this.height?0:this.height
      return {
        height:_height
      }
    })
  }

  render() {
    return (
      <div className="siderFeaturedVideo">
        <p className="siderFeaturedVideoTitle" onClick={this.handleUlShow}>视频</p>
        <ul  style={this.state} ref={this.ul}>
          <li>
            <FeaturedVideo />
          </li>
          <li>
            <FeaturedVideo />
          </li>
        </ul>
      </div>
    )
  }
}

export default SiderFeaturedVideo
