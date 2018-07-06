import './VideoPage.less';
import React, {Component} from 'react';
import VideoItem from './VideoItem';

class VideoPage extends Component {

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

export default VideoPage
