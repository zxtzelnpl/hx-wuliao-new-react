import React, {Component} from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import PagePDFContent from 'components/PagePDFContent/PagePDFContent';
import LittlePage from 'components/Pagination/LittlePage';

class ProductDetail extends Component {
  render() {
    return (
      <div className="materialMarketingListPage">
        <PageTitle title={"产品案例"}/>
        <PagePDFContent />
        <LittlePage />
      </div>
    )
  }
}

export default ProductDetail
