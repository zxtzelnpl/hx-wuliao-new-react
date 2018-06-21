import React, {Component} from 'react'

import './Selection'

class Selection extends Component {
  constructor(props){
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this)
    this.onHandleSelect = this.onHandleSelect.bind(this)
    this.renderItems = this.renderItems.bind(this)
    this.state={
      show:false
    }
  }

  onHandleClick(){
    this.setState(state=>{
      return {
        show:!state.show
      }
    })
  }

  onHandleSelect(e){

  }

  renderItems(){
    return this.props.list.map(item=>{
      const {key,text} = item;
      return <li className="zxt-selection-item" key={key}>{text}</li>
    })
  }

  render () {
    let selectClassName=this.state.show?'zxt-selection on':'zxt-selection'
    return (
      <div className={selectClassName}>
        <p className="zxt-selection-selected"
           onClick={this.onHandleClick}>{this.props.selected}</p>
        <ul
          className="zxt-selection-box"
          onClick={this.onHandleSelect}
        >
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

export default Selection
