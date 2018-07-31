import './StockTable.less';

import React, {Component} from 'react';
import Row from './Row';
import classNames from 'classnames';


class StockTable extends Component {


  renderSortableHead = (_sort, _order) => {
    const {orderChange, sort, order} = this.props;
    const className = classNames(
      `tHead-buttons-${_sort.toLowerCase()}`,
      {
        'on': _sort === sort && _order === order
      }
    )
    return <div className={className} data-sort={_sort} data-order={_order} onClick={orderChange}/>
  }

  renderTH = () => {


    return <ul className="tHead">
      <li className={"tHeadLi stock-teacher"}>老师</li>
      <li className={"tHeadLi stock-name"}>股票名称</li>
      <li className={"tHeadLi stock-buy-price"}>买入价格</li>
      <li className={"tHeadLi stock-buy-timestamp"}>买入时间</li>
      <li className={"tHeadLi stock-sale-price"}>卖出价格</li>
      <li className={"tHeadLi stock-sale-timestamp"}>卖出时间</li>
      <li className={"tHeadLi stock-rise1"}>
        1日涨幅
        <div className="tHead-buttons">
          {this.renderSortableHead('ASC','rise1')}
          {this.renderSortableHead('DESC','rise1')}
        </div>
      </li>
      <li className={"tHeadLi stock-rise3"}>
        3日涨幅
        <div className="tHead-buttons">
          {this.renderSortableHead('ASC','rise3')}
          {this.renderSortableHead('DESC','rise3')}
        </div>
      </li>
      <li className={"tHeadLi stock-rise5"}>
        5日涨幅
        <div className="tHead-buttons">
          {this.renderSortableHead('ASC','rise5')}
          {this.renderSortableHead('DESC','rise5')}
        </div>
      </li>
      <li className={"tHeadLi stock-record-reason"}>理由</li>
    </ul>
  }

  renderDatas = () => {
    return this.props.list.map(data => <Row {...data} key={data.id}/>)
  }

  render() {
    return (
      <div className="stockTable">
        {this.renderTH()}
        {this.renderDatas()}
      </div>
    )
  }
}

export default StockTable
