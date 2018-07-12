import React, {Component} from 'react';
import classNames from 'classnames';

class SubMenu extends Component {

  state = {
    show:false
  }

  handleMouseOver = ()=>{
    this.setState(()=>({show:true}))
  }

  handleMouseOut = () =>{
    this.setState(()=>({show:false}))
  }

  renderItems(){
    return this.props.children.map((child,index)=>(
      <li key={index}>
        {child}
      </li>
    ))
  }

  render() {

    const {text,className} = this.props;
    const subMenuClassName = classNames(className,{
      show:this.state.show
    });
    const title = `${className}-title`;
    const box = `${className}-box`;
    return (
      <div className={subMenuClassName}
           onMouseOver={this.handleMouseOver}
           onMouseOut={this.handleMouseOut}
      >
        <p className={title}>{text}</p>
        <ul className={box}>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

export default SubMenu
