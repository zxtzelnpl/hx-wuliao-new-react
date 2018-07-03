import './LiveVideo.less'
import React, {Component} from 'react'
import Chat from './Chat'

class LiveVideo extends Component {
  render() {
    return (
      <div className="liveVideo">

        <div className="liveVideoBox">

        </div>

        <Chat />
      </div>
    )
  }
}

export default LiveVideo
