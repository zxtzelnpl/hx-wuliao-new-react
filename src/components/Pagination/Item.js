import './Item.less'

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Item extends Component {
  render() {
    return (
      <li className="pageItem">
        <Link className="pageItemA" to={this.props.path}>
          {this.props.title}
        </Link>
      </li>
    )
  }
}

export default Item
