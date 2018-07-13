import './PageImgContent.less';
import React, {PureComponent} from 'react';

class PageImgContent extends PureComponent {

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

    const FILE_PATH = this.getFileUrl();

    return (
      <div className="page-img-content">
        <img className="page-img-content-img" src={FILE_PATH} />
      </div>
    )
  }
}

export default PageImgContent
