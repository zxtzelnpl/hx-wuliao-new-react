import './HeadBlankLink.less';

import React, {PureComponent} from 'react';

class VideoLink extends PureComponent {
  render() {
    return <a className="head-blank-link" href="/build/video.html" target={"_blank"}>
      直播间
    </a>;
  }
}

export default VideoLink;
