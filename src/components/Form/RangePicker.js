import React, {Component} from 'react'

class RangePicker extends Component {


  render() {
    const {className} = this.props;
    return (
      <div className={className}>
        <div className={`${className}-from`}>
          <span className={`${className}-span`}>开始时间</span>
          <input className={`${className}-input`} type="date" name={"from"} onChange={this.props.onChange} />
        </div>
        <div className="blank-width-10" />
        <div className={`${className}-to`}>
          <span className={`${className}-span`}>结束时间</span>
          <input className={`${className}-input`} type="date" name={"to"} onChange={this.props.onChange} />
        </div>
      </div>
    )
  }
}

export default RangePicker
