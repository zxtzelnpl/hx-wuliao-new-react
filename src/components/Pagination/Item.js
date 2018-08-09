import './Item.less'

import React, {Component} from 'react';
import moment from 'moment';
import classNames from 'classnames';
import PagePDFContent from 'components/PageContent/PagePDFContent';
import PageHtmlContent from 'components/PageContent/PageHtmlContent';
import PageOfficeContent from 'components/PageContent/PageOfficeContent';
import PageImgContent from 'components/PageContent/PageImgContent';
import {pdfReg, officeReg, imgReg} from "utils/tools";

const FORMAT = 'YYYY-MM-DD hh:mm';

function getTime(a, b) {
  if (a !== undefined) {
    return moment.unix(a).format(FORMAT);
  }
  else if (b !== undefined) {
    return moment.unix(b).format(FORMAT);
  }
}

class Item extends Component {

  state = {
    show: false
  }

  renderContent = () => {
    let {content, filepath, timestamp} = this.props
    let {show} = this.state;

    if (!show) {
      return null;
    }

    if (content !== '' && content !== null) {
      return <PageHtmlContent htmlDom={content} filepath={filepath}/>
    }
    if (filepath) {
      if (pdfReg.test(filepath)) {
        return <PagePDFContent filepath={filepath} timestamp={timestamp}/>
      }

      if (imgReg.test(filepath)) {
        return <PageImgContent filepath={filepath}/>
      }

      let match = filepath.match(officeReg);

      if (match) {
        return <PageOfficeContent filepath={filepath} type={match[1]}/>
      }
    }
  }

  handleClick = () => {
    this.setState(({show}) => ({show: !show}))
  }

  render() {
    const {title, author, timestamp, new_timestamp} = this.props;
    const header = classNames('page-item-header', {
      show: this.state.show
    })
    const time = getTime(timestamp, new_timestamp);
    return (
      <li className="page-item">
        <div className={header} onClick={this.handleClick}>
          <div className="page-item-header-title">
            {title}
          </div>
          <div className="page-item-header-sub">
            {author && <span className="page-item-header-sub-author">上传用户：{author}</span>}
            {time && <span className="page-item-header-sub-time">上传时间：{time}</span>}
          </div>
        </div>
        {this.renderContent()}
      </li>
    )
  }
}

export default Item
