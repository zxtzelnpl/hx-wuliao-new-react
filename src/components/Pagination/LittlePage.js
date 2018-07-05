import './LittlePage.less';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Item from './Item';

class LittlePage extends Component {
  renderList(){
    const {list,url} = this.props;

    return list.map(data=>(<Item key={data.id} {...data} url={url}/>))
  }

  render() {
    const {url} = this.props;
    return (
      <div className="littlePage">
        <ul className="oneLittlePage">
          {this.renderList()}
        </ul>
        <Link className="primaryBtn" to={url}>
          更多
        </Link>
      </div>
    )
  }
}

export default LittlePage
