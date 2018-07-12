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

  componentDidUpdate(preProps){
    if(preProps.router!==this.props.router){
      this.setState({
        show:false
      })
    }
  }

  renderItems = ()=>{
    return this.props.children.map((child,index)=>(
      <li key={index}>
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
