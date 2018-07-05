import React, {Component} from 'react'

class PageHtmlContent extends Component {
  render() {
    const {htmlDom} = this.props;

    return (
      <div dangerouslySetInnerHTML={{__html:htmlDom}}/>
    )
  }
}
export default PageHtmlContent
