import './BriefPage.less';

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

class BriefPage extends Component {
  renderList(){
    return datas.map(data=>(<Item key={data.id} {...data}/>))
  }

  render() {
    const {title,to} = this.props;
    return (
      <div className="briefPage">
        <p className="briefPageTitle">{title}</p>
        <ul className="oneBriefPage">
          {this.renderList()}
        </ul>
        <Link className="primaryBtn" to={to}>
          进入
        </Link>
      </div>
    )
  }
}

export default BriefPage
