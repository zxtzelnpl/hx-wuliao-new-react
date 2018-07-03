import './Page.less';

import React, {Component} from 'react';
import propTypes from 'prop-types';
import Item from './Item';
import PageNumbers from './PageNumbers';

const datas=[

]
for(let i=0;i<20;i++){
  datas.push({
    id:`new${i}`,
    title:'强势优选20180604高周转低负债互动资料',
    path:'/product/team_qsyx/duanxianbao/marketing/product/detail'
  })
}

class Page extends Component {

  turnPage(page){
    console.log(page)
  }

  renderList(){
    const {url} = this.props;
    return datas.map(data=>(<Item key={data.id} url={url} {...data}/>))
  }

  render() {
    const {total,pageSize} = this.props;
    let totalPages = Math.ceil(total/pageSize);

    return (
      <div className="page">
        <ul className="onePage">
          {this.renderList()}
        </ul>

        <PageNumbers
          currentPage={11}
          totalPages={totalPages}
          numberGroupSize={5}
          turnPage={this.turnPage}
        />
      </div>
    )
  }
}

Page.propTypes={
  total:propTypes.number.isRequired,
  pageSize:propTypes.number.isRequired,
  url:propTypes.string.isRequired,
}

export default Page
