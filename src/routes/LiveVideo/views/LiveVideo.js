import './LiveVideo.less';
import React, {Component} from 'react';
import Chat from './Chat';
import Video from './Video';
import {ReplyVideo} from 'components/CRMVideo';

class LiveVideo extends Component {
  render() {
    return (
      <div className="liveVideo">

        <div className="liveVideoBox">
          <Video />
          <div className="blank-height-10" />
          <ReplyVideo />
        </div>

        <Chat />
      </div>
    )
  }
}

export default LiveVideo
