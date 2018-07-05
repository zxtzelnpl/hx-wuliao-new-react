import './Selection.less'
import React, {Component} from 'react'

class Selection extends Component {

  onChange = (e)=>{

    this.props.onSelect(e.target.value);
  }

  renderOptions(){
    const {list} = this.props;
    return list.map(id=>(<option key={id} value={id} >{`第${id}期`}</option>))
  }

  render() {
    return (
      <select className="stockSelection" onChange={this.onChange} value={this.props.selectId}>
        {this.renderOptions()}
      </select>
    )
  }
}

export default Selection
