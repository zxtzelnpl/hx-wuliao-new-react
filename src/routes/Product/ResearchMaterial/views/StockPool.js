import './StockPool.less';
import React, {Component} from 'react';
import propTypes from 'prop-types';
import StockPoolItem from './StockPoolItem';
import Selection from './Selection'
import moment from "moment/moment";

const FORMAT = 'YYYY-MM-DD hh:mm';

function getTime(info) {
  if (Array.isArray(info) && info.length > 0) {
    let {timestamp, new_timestamp} = info[0];
    if (timestamp !== undefined) {
      return moment.unix(timestamp).format(FORMAT);
    }
    else if (new_timestamp !== undefined) {
      return moment.unix(new_timestamp).format(FORMAT);
    }
  }
}

class StockPool extends Component {

  state = {}

  renderList() {
    const {info, receivedAt} = this.props;

    console.log(info, receivedAt)

    let dom = null;
    if (info.length > 0) {
      dom = info.map((item, index) => (<StockPoolItem {...item} key={item.id} index={index}/>))
    }

    if (receivedAt && info.length === 0) {
      dom = <div className="no-data">暂无数据</div>;
    }

    return dom;
  }

  handleSelect = (id) => {
    this.props.onSelect(id)
  }

  renderDate() {
    const time = getTime(this.props.info)
    if (time) {
      return <div className={"stock-pool-title-date"}>
        {time}
      </div>
    }
  }

  render() {

    const {title, list, selectId} = this.props;


    return (
      <div className={"stockPool"}>
        <div className="stock-pool-title">
          <div className="left">
            <span className="text">
              {title}
            </span>
            <Selection
              key={'primary'}
              title={'请选择'}
              list={list}
              selectId={selectId}
              onSelect={this.handleSelect}
            />
          </div>

          {this.renderDate()}
        </div>
        <ul className="stockPoolContent">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

StockPool.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  selectId: propTypes.string.isRequired,
  list: propTypes.array.isRequired,
  info: propTypes.array.isRequired,
  onSelect: propTypes.func.isRequired,
}

export default StockPool
