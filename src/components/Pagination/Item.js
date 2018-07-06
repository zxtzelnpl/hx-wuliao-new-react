import './Item.less'

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Item extends Component {
  render() {
    const {linkUrl,title,id} = this.props;

    return (
      <li className="pageItem">
        <Link className="pageItemA" to={`${linkUrl}/detail/${id}`}>
          {title}
        </Link>
      </li>
    )
  }
}

export default Item
