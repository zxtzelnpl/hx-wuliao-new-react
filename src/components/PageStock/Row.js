import React, {Component} from 'react';
import ReasonBox from './ReasonBox';
import moment from "moment/moment";
import {makePercent} from "src/utils/tools";

class Row extends Component {

  row = React.createRef()

  state={
    show:false
  }

  componentDidMount(){
    this.reasonBoxStyle = {
      top:this.row.current.offsetTop
    }
  }

  handleClickShow = e=>{
    this.setState({
      show:true
    })
  }

  handleClickHide = ()=>{
    this.setState({
      show:false
    })
  }

  render() {
    const {teacher, name, buy_price, buy_timestamp, sale_price, sale_timestamp, rise1, rise3, rise5,record_reason} = this.props;

    return <ul className="tBody" ref={this.row}>
      <li className={"tBodyLi stock-teacher"}>{teacher}</li>
      <li className={"tBodyLi stock-name"}>{name}</li>
      <li className={"tBodyLi stock-buy-price"}>{buy_price === '0.000' ? '' : buy_price}</li>
      <li
        className={"tBodyLi stock-buy-timestamp"}>{buy_timestamp === '0' ? '' : moment.unix(buy_timestamp).format('YYYY-MM-DD HH:mm')}</li>
      <li className={"tBodyLi stock-sale-price"}>{sale_price === '0.000' ? '' : sale_price}</li>
      <li
        className={"tBodyLi stock-sale-timestamp"}>{sale_timestamp === '0' ? '' : moment.unix(sale_timestamp).format('YYYY-MM-DD HH:mm')}</li>
      <li className={"tBodyLi stock-rise1"}>
        {makePercent(rise1)}
      </li>
      <li className={"tBodyLi stock-rise3"}>
        {makePercent(rise3)}
      </li>
      <li className={"tBodyLi stock-rise5"}>
        {makePercent(rise5)}
      </li>
      <li className={"tBodyLi stock-record-reason"} onClick={this.handleClickShow}>查看详情</li>
      {this.state.show&&<ReasonBox reason={record_reason} onClick={this.handleClickHide} style={this.reasonBoxStyle} />}
    </ul>
  }
}

export default Row
