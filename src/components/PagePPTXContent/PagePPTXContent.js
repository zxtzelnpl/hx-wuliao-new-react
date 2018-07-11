import './PagePPTXContent.less';
import React, {Component} from 'react'

class PagePPTXContent extends Component {
  render() {
    let {filepath,title} = this.props;

    if(filepath[0]!=='/'){
      filepath = '/'+filepath
    }

    return (
      <div className="pagePPTXContent">
        <div className="header">
          <p className="title">
            {title}
          </p>
          <a href={filepath} className="download">下载</a>
        </div>
        <div className="subtitle">
          （此文件为PPT格式，请下载后观看）
        </div>
      </div>
    )
  }
}

export default PagePPTXContent
