import React, {Component} from 'react';

class SubMenu extends Component {

  renderItems(){
    return this.props.children.map(child=>(
      <li>
        {child}
      </li>
    ))
  }

  render() {

    let {text,className} = this.props;
    let title = `${className}-title`;
    let box = `${className}-box`;
    return (
      <div className={className}>
        <p className={title}>{text}</p>
        <ul className={box}>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

export default SubMenu
