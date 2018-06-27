import React, {Component} from 'react'
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

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file="http://public.jyzqsh.com/test/test.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    )
  }
}

export default PagePDFContent
