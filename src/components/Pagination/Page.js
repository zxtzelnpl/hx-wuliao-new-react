import './Page.less';

import React, {Component} from 'react';
import Item from './Item';
import PageNumbers from './PageNumbers'

const datas=[

]
for(let i=0;i<20;i++){
  datas.push({
    id:`new${i}`,
    title:'强势优选20180604高周转低负债互动资料',
    path:'/abc'
  })
}


const total = 201;
const pageSize = 20;


class Page extends Component {

  turnPage(page){
    console.log(page)
  }

  renderList(){
    return datas.map(data=>(<Item key={data.id} {...data}/>))
  }

  render() {
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

export default Page
