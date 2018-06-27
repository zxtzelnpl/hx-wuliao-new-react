import './LittlePage.less';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';

const datas=[

]
for(let i=0;i<3;i++){
  datas.push({
    id:`new${i}`,
    title:'强势优选20180604高周转低负债互动资料',
    path:'/abc'
  })
}

class LittlePage extends Component {
  renderList(){
    return datas.map(data=>(<Item key={data.id} {...data}/>))
  }

  render() {
    return (
      <div className="littlePage">
        <ul className="oneLittlePage">
          {this.renderList()}
        </ul>
        <Link className="primaryBtn" to="/material/marketing/product/list">
          更多素材
        </Link>
      </div>
    )
  }
}

export default LittlePage
