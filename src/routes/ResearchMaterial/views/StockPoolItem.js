import './StockPoolItem.less';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StockPoolItem extends Component {
  render() {

    const {index,name,code,id,url} = this.props;

    return (
      <Link className="stockPoolItem" to={`${url}/${id}`}>
        <span className="index">{index}</span>
        <span className="name">{name}</span>
        <span className="code">代码 ： {code}</span>
        <span className="triangle" />
      </Link>
    )
  }
}

export default StockPoolItem
