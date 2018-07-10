import React, {Component} from 'react';

import {Alert} from 'components/Alert';
import {HeaderForVideo} from './components/Header';
import Banner from './components/Banner/Banner';
/*直播视频*/
import {
  LiveVideo
} from './routes/LiveVideo';


class VideoApp extends Component {
  render() {
    return (
      <div>
        <Alert />
        <HeaderForVideo/>
        <Banner/>
        <LiveVideo />
      </div>
    )
  }
}

export default VideoApp
