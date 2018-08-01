import './Item.less'

import React, {Component} from 'react';
import classNames from 'classnames';
import PagePDFContent from 'components/PageContent/PagePDFContent';
import PageHtmlContent from 'components/PageContent/PageHtmlContent';
import PageOfficeContent from 'components/PageContent/PageOfficeContent';
import PageImgContent from 'components/PageContent/PageImgContent';
import {pdfReg, officeReg, imgReg} from "utils/tools";

class Item extends Component {

  state = {
    show:false
  }

  renderContent = () => {
    let {content,filepath,timestamp} = this.props
    let {show} = this.state;

    if(!show){
      return null;
    }

    if (content!==''&&content!==null) {
      return <PageHtmlContent htmlDom={content} filepath={filepath}/>
    }
    if (filepath) {
      if(pdfReg.test(filepath)){
        return <PagePDFContent filepath={filepath} timestamp={timestamp}/>
      }

      if(imgReg.test(filepath)){
        return <PageImgContent filepath={filepath}/>
      }

      let match = filepath.match(officeReg);

      if(match){
        return <PageOfficeContent filepath={filepath} type={match[1]}/>
      }
    }
  }

  handleClick = ()=>{
    this.setState(({show})=>({show:!show}))
  }

  render() {
    const {title} = this.props;
    const header = classNames({
      pageItemHeader:true,
      show:this.state.show
    })
    return (
      <li className="pageItem">
        <div className={header} onClick={this.handleClick}>
          {title}
        </div>
        {this.renderContent()}
      </li>
    )
  }
}

export default Item
