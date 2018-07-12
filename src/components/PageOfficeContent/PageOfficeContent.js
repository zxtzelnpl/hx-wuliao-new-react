import './PageOfficeContent.less';
import React, {Component} from 'react';
import propTypes from 'prop-types';

class PageOfficeContent extends Component {
  render() {
    let {filepath,type} = this.props;

    if(filepath[0]!=='/'){
      filepath = '/'+filepath
    }

    return (
      <div className="pageOfficeContent">
        <div className="header">
          <p className="sub-title">
            （此文件为{type}格式，请下载后观看）
          </p>
          <a href={filepath} className="download">下载</a>
        </div>
      </div>
    )
  }
}

PageOfficeContent.propTypes={
  type:propTypes.string.isRequired,
  filepath:propTypes.string.isRequired

}

export default PageOfficeContent
