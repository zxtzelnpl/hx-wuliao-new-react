import './StockTable.less';
import React, {Component} from 'react';

class StockTable extends Component {

  headers = [
    '老师',
    '来源',
    '股票名称',
    '买入价格',
    '买入时间',
    '卖出价格',
    '卖出时间',
    '止盈',
    '止损',
    '成功率',
    '理由',
    '状态',
    '操作'
  ]

  renderTH = () => {
    let tds = this.headers.map((header, index) => {
      return <li className="tHeadLi" key={index}>{header}</li>
    })
    return <ul className="tHead">{tds}</ul>
  }

  renderDatas = () => {
    return this.props.datas.map((data, index) => {
      return <ul className="tBody" key={index}>
        <li className={"tBodyLi"}>{data.teacher}</li>
        <li className={"tBodyLi"}>{data.from}</li>
        <li className={"tBodyLi"}>{data.stock}</li>
        <li className={"tBodyLi"}>{data.buy_price}</li>
        <li className={"tBodyLi"}>{data.buy_time}</li>
        <li className={"tBodyLi"}>{data.sell_price}</li>
        <li className={"tBodyLi"}>{data.sell_time}</li>
        <li className={"tBodyLi"}>{data.target_profit}</li>
        <li className={"tBodyLi"}>{data.stop_loss}</li>
        <li className={"tBodyLi"}>{data.success_percent}</li>
        <li className={"tBodyLi"}>{data.reason}</li>
        <li className={"tBodyLi"}>{data.state}</li>
        <li className={"tBodyLi"}>{data.action}</li>
      </ul>
    })
  }

  render() {
    const {datas} = this.props;


    return (
      <div className="stockTable">
        {this.renderTH()}
        {this.renderDatas()}
      </div>
    )
  }
}

export default StockTable
