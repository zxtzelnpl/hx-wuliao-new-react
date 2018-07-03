import './SpeechCraft.less';

import React, {Component} from 'react';
import Page from 'components/Pagination/Page';
import PageTitle from 'components/PageTitle/PageTitle';

class List extends Component {
  render() {
    let {match} = this.props;
    let url = match.url+'/detail';

    return (
      <div className="speechCraft">
        <PageTitle title={"营销话术"}/>
        <Page
          total={301}
          pageSize={20}
          url={url}
        />
      </div>
    )
  }
}

export default List
