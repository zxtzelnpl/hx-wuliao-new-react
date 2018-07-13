import './Item.less'

import React, {Component} from 'react';
import classNames from 'classnames';
import PagePDFContent from 'components/PagePDFContent/PagePDFContent';
import PageHtmlContent from 'components/PageHtmlContent/PageHtmlContent';
import PageOfficeContent from 'components/PageOfficeContent/PageOfficeContent';
import {pdfReg, officeReg} from "src/utils/tools";

class Item extends Component {

  state = {
    show:false
  }

  renderContent = () => {
    let {content,filepath} = this.props
    let {show} = this.state;

    if(!show){
      return null;
    }

    if (content!==''&&content!==null) {
      return <PageHtmlContent htmlDom={content}/>
    }
    if (filepath) {
      if(pdfReg.test(filepath)){
        return <PagePDFContent filepath={filepath}/>
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
