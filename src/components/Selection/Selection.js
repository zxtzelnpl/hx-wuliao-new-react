import React, {Component} from 'react'

import './Selection'

class Selection extends Component {
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this)
    this.state={
      show:false
    }
  }

  onClick(){
    this.setState(state=>{
      return {
        show:!state.show
      }
    })
  }

  onSelect(e){
    let value = e.target.innerHTML
    this.props.onSelect(value)
    this.setState({
      show:false
    })
  }

  renderItem(data,index){
    return <li className="zxt-selection-item" key={index}>{data}</li>
  }

  render () {
    let _datas = this.props.list.filter(data=>{
      return data!==this.props.selected
    })
    let items = _datas.map(this.renderItem.bind(this))
    let selectClassName=this.state.show?'zxt-selection on':'zxt-selection'
    return (
      <div className={selectClassName}>
        <p className="zxt-selection-selected"
           onClick={this.onClick.bind(this)}>{this.props.selected}</p>
        <ul
          className="zxt-selection-box"
          onClick={this.onSelect.bind(this)}
        >
          {items}
        </ul>
      </div>
    )
  }
}

export default Selection
