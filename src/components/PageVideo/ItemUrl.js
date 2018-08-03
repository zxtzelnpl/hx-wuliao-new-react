import './Item.less';
import React, {Component} from 'react';
import {getPoster} from 'utils/tools';

class ItemUrl extends Component {
  render() {
    const {url,title,brief} = this.props;

    return (
      <a className="videoItem" href={url} target="_blank">
        <img className="img" src={getPoster()} />
        <div className="subTitle">{title}</div>
        {brief&&<p className="text">{brief}</p>}
      </a>
    )
  }
}

export default ItemUrl
