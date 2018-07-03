import './ProductList.less';

import React, {Component} from 'react';
import Page from 'components/Pagination/Page';
import PageTitle from 'components/PageTitle/PageTitle';

class List extends Component {
  render() {
    let {match} = this.props;
    let url = match.url+'/detail';

    return (
      <div className="materialMarketingListPage">
        <PageTitle title={"产品案例"}/>
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
