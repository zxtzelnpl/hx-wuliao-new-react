import React, {PureComponent} from 'react';
import classNames from 'classnames';


class SelectionDropDown extends PureComponent {
  state = {
    show:false
  }

  onHandleClick = ()=>{
    this.setState(state=>{
      return {
        show:!state.show
      }
    })
  }

  renderItems = ()=>{
    return this.props.children.map(child=>(
      <li>
        {child}
      </li>
    ))
  }

  render () {
    const {title,className} = this.props;
    const selectClassName = classNames(className,{
      show:this.state.show
    });

    return (
      <div className={selectClassName}>
        <p className={`${className}-title`} onClick={this.onHandleClick}>{title}</p>
        <ul
          className={`${className}-box`}
          onClick={this.onHandleSelect}
        >
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

export default SelectionDropDown
