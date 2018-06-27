import React, {Component} from 'react'
import PageTitle from 'components/PageTitle/PageTitle'
import PagePDFContent from 'components/PagePDFContent/PagePDFContent'

class ProductDetail extends Component {
  render() {
    return (
      <div className="pageT">
        <PageTitle title={"产品案例"}/>
        <PagePDFContent />
      </div>
    )
  }
}

export default ProductDetail
