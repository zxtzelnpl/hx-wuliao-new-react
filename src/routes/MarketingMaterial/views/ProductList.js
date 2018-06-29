import './ProductList.less';

import React, {Component} from 'react';
import Page from 'components/Pagination/Page';
import PageTitle from 'components/PageTitle/PageTitle';

class List extends Component {
  render() {

    console.log(this.props)

    return (
      <div className="materialMarketingListPage">
        <PageTitle title={"产品案例"}/>
        <Page />
      </div>
    )
  }
}

export default List
