import './Selection.less'
import React, {Component} from 'react'

class Selection extends Component {

  onChange = (e)=>{

    this.props.onSelect(e.target.value);
  }

  renderOptions(){
    const {list} = this.props;
    return list.map(item=>(<option key={item.id} value={item.id}>{item.text}</option>))
  }

  render() {
    return (
      <select className="stockSelection" onChange={this.onChange}>
        {this.renderOptions()}
      </select>
    )
  }
}

export default Selection
