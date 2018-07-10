import './Video.less'

import React, {Component} from 'react'

class Video extends Component {
  constructor(props) {
    super(props)

    this.genseeScript = 'http://static.gensee.com/webcast/static/sdk/js/gssdk.js';
    this.state = {
      myHtml: `<img width=100% height=100% src="http://zhibo.hbtvtswc.cn/images/YRight/Y_Right_Syllabus7000.gif?v=0" alt=""/>`
    }
  }

  componentDidMount() {

    this.node = document.createElement('script');
    this.node.setAttribute('src', this.genseeScript);

    this.node.addEventListener('load', () => {

      this.setState({
        myHtml: `<gs:video-live id="videoComponent"
                         site="jyzqsh.gensee.com"
                         ctx="webcast"
                         ownerid="2a81e345b86f45a4b7e82a0ee0142d1a"
                         uname=""
                         authcode=""
          />`
      })
    })
    document.head.appendChild(this.node);
  }

  componentWillUnmount(){
    document.head.removeChild(this.node)
  }

  render() {
    return (
      <div className="video-box">
        <div className="notice">
          <div className="notice-wrap">
            <p className="text">
              免责声明
            </p>
          </div>
        </div>
        <div
          className="gensee-video"
          dangerouslySetInnerHTML={{__html: this.state.myHtml}}
        />
      </div>
    )
  }
}

export default Video
