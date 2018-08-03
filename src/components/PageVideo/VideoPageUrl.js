import './PageVideo.less';
import React, {Component} from 'react';
import VideoItem from './ItemUrl';

class VideoPageUrl extends Component {

  renderList(){

    return this.props.list.map(data=>(<VideoItem key={data.id} {...data}/>))
  }

  render() {
    return (
      <div className={"videoPage"}>
        <ul className="oneVideoPage">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

export default VideoPageUrl
