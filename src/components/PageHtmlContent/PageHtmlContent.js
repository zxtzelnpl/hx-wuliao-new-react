import './pageHtmlContent.less';
import React, {PureComponent} from 'react';

class PageHtmlContent extends PureComponent {
  render() {
    const {htmlDom} = this.props;

    return (
      <div className="pageHtmlContent" dangerouslySetInnerHTML={{__html:htmlDom}}/>
    )
  }
}
export default PageHtmlContent
