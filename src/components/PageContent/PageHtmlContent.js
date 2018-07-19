import './PageHtmlContent.less';
import React, {PureComponent} from 'react';

class PageHtmlContent extends PureComponent {
  getFileUrl = ()=>{
    const {filepath} = this.props;
    let url;
    if (filepath[0] !== '/') {
      url = '/' + filepath
    }
    else {
      url = filepath;
    }
    return url;
  }

  render() {
    const {htmlDom,filepath} = this.props;

    return (
      <div className="page-html-content">
        <div  dangerouslySetInnerHTML={{__html:htmlDom}}/>
        {filepath&&<a className="download" target={"_blank"} href={this.getFileUrl()}>下载</a>}
      </div>
    )
  }
}
export default PageHtmlContent
