import './pagePDFContent.less';
import React, {PureComponent} from 'react';
import classNames from 'classnames';


class PagePDFContent extends PureComponent {

  canvas = React.createRef();

  state = {};

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

  componentDidMount() {
    let FILE_URL = this.getFileUrl();

    PDFJS
      .getDocument(FILE_URL)
      .then(pdfDocument => {
        this.setState({
          pageNumber:1,
          pdfDocument:pdfDocument,
          show:true,
          numPages:pdfDocument.numPages
        })
      })
      .catch(error => {
        this.setState({
          error
        })
      });
  }

  changePage = ()=>{
    const canvas = this.canvas.current;
    const {pdfDocument,pageNumber} = this.state;
    let DEFAULT_SCALE = 1.0;

    return pdfDocument
      .getPage(pageNumber)
      .then(function (pdfPage) {
        let viewport = pdfPage.getViewport(DEFAULT_SCALE);

        canvas.width = canvas.clientWidth;
        canvas.height = viewport.height * (canvas.clientWidth / viewport.width);
        let ctx = canvas.getContext('2d');
        let renderTask = pdfPage.render({
          canvasContext: ctx,
          viewport: viewport
        });
        return renderTask.promise;
      });
  }

  componentDidUpdate(preProps,preState){
    if(this.state.pdfDocument&&preState.pageNumber!==this.state.pageNumber){
      this.changePage()
    }
  }

  prev = () => {
    let {pageNumber} = this.state;
    if (pageNumber > 1) {
      let prevPageNumber = pageNumber - 1;
      this.setState({
        pageNumber: prevPageNumber
      });
    }
  }

  next = () => {
    let {pageNumber, numPages} = this.state;
    if (pageNumber < numPages) {
      let nextPageNumber = pageNumber + 1;
      this.setState({
        pageNumber: nextPageNumber
      });
    }
  }

  renderContent = ()=>{
    let FILE_URL = this.getFileUrl();
    let {error} = this.state;
    let dom =null;
    if(error){
      dom = <div className="pdf-load-error">
        <p>无法获取“{FILE_URL}”，请检查资源是否存在。</p>
        点击<a className="pdf-load-error-link" href={`${location.origin}${FILE_URL}`} target={"_blank"}>资源地址</a>
      </div>
    }
    else{
      dom = <canvas className="pagePDFCanvas" ref={this.canvas}/>
    }

    return dom;
  }

  render() {
    const FILE_URL = this.getFileUrl();
    const {pageNumber, numPages} = this.state;

    const btnPrevClassName = classNames({
      btn: true,
      disable: pageNumber === 1
    })
    const btnNextClassName = classNames({
      btn: true,
      disable: pageNumber === numPages
    })

    return (
      <div className="pagePDFContent">
        {typeof numPages !== 'undefined' && numPages > 0 &&
        <a className="download" target={"_blank"} href={FILE_URL}>下载</a>}

        {this.renderContent()}

        {
          typeof numPages !== 'undefined' && numPages > 0 &&
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
