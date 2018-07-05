import './CustomerServiceVideo.less';
import React, {Component} from 'react';
import VideoPage from 'components/Pagination/VideoPage';

class CustomerServiceVideo extends Component {
  render() {
    return (
      <div className="customerServiceVideo">
        <VideoPage
          title={"视频回播"}
        />
      </div>
    )
  }
}

export default CustomerServiceVideo
