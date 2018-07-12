import React, {Component} from 'react';

class Item extends Component {
  render() {

    let {text,className} = this.props;

    return (
      <div className={className}>
        {text}
      </div>
    )
  }
}

export default Item
