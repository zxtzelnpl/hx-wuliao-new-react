import './pageHtmlContent.less';
import React, {Component} from 'react';

class PageHtmlContent extends Component {
  render() {
    const {htmlDom} = this.props;

    return (
      <div className="pageHtmlContent" dangerouslySetInnerHTML={{__html:htmlDom}}/>
    )
  }
}
export default PageHtmlContent
