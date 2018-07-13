import './PageHtmlContent.less';
import React, {PureComponent} from 'react';

class PageHtmlContent extends PureComponent {
  render() {
    const {htmlDom} = this.props;

    return (
      <div className="page-html-content" dangerouslySetInnerHTML={{__html:htmlDom}}/>
    )
  }
}
export default PageHtmlContent
