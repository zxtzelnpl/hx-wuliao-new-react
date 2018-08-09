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
  if (a !== undefined && a != 0) {
    return moment.unix(a).format(FORMAT);
  }
  else if (b !== undefined && b != 0) {
    return moment.unix(b).format(FORMAT);
  }
}

class Item extends Component {

  state = {
    show: false
  }

  handleClick = () => {
    this.setState(({show}) => ({show: !show}))
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

  renderSub = () => {
    const {author, timestamp, new_timestamp} = this.props;
    let dom = null;
    let domArray = [];
    if(author){
      domArray.push(<span key="author" className="page-item-header-sub-author">上传用户：{author}</span>)
    }
    const time = getTime(timestamp, new_timestamp);
    if(time){
      domArray.push(<span key="time" className="page-item-header-sub-time">上传时间：{time}</span>);
    }

    if(domArray.length>0){
      dom = <div className="page-item-header-sub">{domArray}</div>
    }

    return dom;
  }

  render() {
    const header = classNames('page-item-header', {
      show: this.state.show
    })
    return (
      <li className="page-item">
        <div className={header} onClick={this.handleClick}>
          <div className="page-item-header-title">
            {this.props.title}
          </div>
          {this.renderSub()}
        </div>
        {this.renderContent()}
      </li>
    )
  }
}

export default Item
