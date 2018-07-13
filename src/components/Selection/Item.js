import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Item extends Component {
  render() {

    let {text,className,url} = this.props;
    return (
      <Link className={className} to={url}>
        {text}
      </Link>
    )
  }
}

export default Item
