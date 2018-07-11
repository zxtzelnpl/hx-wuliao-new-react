import './pagePDFContent.less';
import React, {Component} from 'react';
import classNames from 'classnames';
import { Document,Page } from 'react-pdf';

class PagePDFContent extends Component {
  constructor(props){
    super(props)
  }

  state = {
    pageNumber:1
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  prev = ()=>{
    let {pageNumber} = this.state;
    if(pageNumber>1){
      let prevPageNumber = pageNumber-1;
      this.setState({
        pageNumber:prevPageNumber
      });
    }
  }

  next = ()=>{
    let {pageNumber,numPages} = this.state;
    if(pageNumber<numPages){
      let nextPageNumber = pageNumber+1;
      this.setState({
        pageNumber:nextPageNumber
      });
    }
  }

  render() {
    let {filepath}  = this.props;
    const { pageNumber, numPages } = this.state;

    const btnPrevClassName = classNames({
      btn:true,
      disable:pageNumber === 1
    })
    const btnNextClassName = classNames({
      btn:true,
      disable:pageNumber === numPages
    })

    if(filepath[0]!=='/'){
      filepath = '/'+filepath
    }

    return (
      <div className="pagePDFContent">
        {typeof numPages!=='undefined'&&numPages>0&&<a className="download primaryBtn" target={"_blank"} href={filepath}>下载</a>}
        <Document
          file={filepath}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        {
          typeof numPages!=='undefined'&&numPages>0&&
          <div className="pagePDFFoot">
            <div className="pagePDFControl">
              <p className={btnPrevClassName} onClick={this.prev}>上一页</p>
              <p className="showIndex">Page {pageNumber} of {numPages}</p>
              <p className={btnNextClassName} onClick={this.next}>下一页</p>
            </div>
            <p className="datetime">上传日期 2018.06.21 11：13</p>
          </div>
        }
      </div>
    )
  }
}

export default PagePDFContent
