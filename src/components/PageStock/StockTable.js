import './StockTable.less';
import React, {Component} from 'react';
import Loading from 'components/Loading/Loading'
import moment from 'moment';

const STATUS = {
  '1':'完结-已达标',
  '2':'完结-未达标',
  '3':'未完结',
  '10':'已完结（长期）',
  '11':'未完结（长期）',
  '12':'完结达标（长期）',
  '13':'完结未达标（长期）',
}

class StockTable extends Component {

  renderTH = () => {
    return <ul className="tHead">
      <li className={"tHeadLi stock-teacher"}>老师</li>
      <li className={"tHeadLi stock-name"}>股票名称</li>
      <li className={"tHeadLi stock-buy-price"}>买入价格</li>
      <li className={"tHeadLi stock-buy-timestamp"}>买入时间</li>
      <li className={"tHeadLi stock-sale-price"}>卖出价格</li>
      <li className={"tHeadLi stock-sale-timestamp"}>卖出时间</li>
      <li className={"tHeadLi stock-stop-win"}>止盈</li>
      <li className={"tHeadLi stock-stop-loss"}>止损</li>
      <li className={"tHeadLi stock-record-reason"}>理由</li>
      <li className={"tHeadLi stock-status"}>状态</li>
    </ul>
  }

  renderDatas = () => {
    return this.props.list.map((data) => {

      const {id,teacher,name,buy_price,buy_timestamp,sale_price,sale_timestamp,stop_win,stop_loss,record_reason,status} = data;

      return <ul className="tBody" key={id}>
        <li className={"tBodyLi stock-teacher"}>{teacher}</li>
        <li className={"tBodyLi stock-name"}>{name}</li>
        <li className={"tBodyLi stock-buy-price"}>{buy_price==='0.000'?'':buy_price}</li>
        <li className={"tBodyLi stock-buy-timestamp"}>{buy_timestamp==='0'?'':moment.unix(buy_timestamp).format('YYYY-MM-DD HH:mm')}</li>
        <li className={"tBodyLi stock-sale-price"}>{sale_price==='0.000'?'':sale_price}</li>
        <li className={"tBodyLi stock-sale-timestamp"}>{sale_timestamp==='0'?'':moment.unix(sale_timestamp).format('YYYY-MM-DD HH:mm')}</li>
        <li className={"tBodyLi stock-stop-win"}>{stop_win==='0.000'?'':stop_win}</li>
        <li className={"tBodyLi stock-stop-loss"}>{stop_loss==='0.000'?'':stop_loss}</li>
        <li className={"tBodyLi stock-record-reason"}>{record_reason}</li>
        <li className={"tBodyLi stock-status"}>{STATUS[status]}</li>
      </ul>
    })
  }

  render() {
    const {isFetching} = this.props;

    return (
      <div className="stockTable">
        {this.renderTH()}
        {this.renderDatas()}
        {isFetching&&<Loading />}
      </div>
    )
  }
}

export default StockTable
