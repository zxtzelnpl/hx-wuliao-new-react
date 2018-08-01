import './Selection.less'
import React, {Component} from 'react'

class Selection extends Component {

  onChange = (e)=>{

    this.props.onSelect(e.target.value);
  }

  render() {

    const {list} = this.props;
    let dom = null;
    if(list.length>0){
      dom = <select className="stockSelection" onChange={this.onChange} value={this.props.selectId}>
        {list.map(id=>(<option key={id} value={id} >{`第${id}期`}</option>))}
      </select>
    }
    return dom;
  }
}

export default Selection
