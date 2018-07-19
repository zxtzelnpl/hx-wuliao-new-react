import './TopBox.less';

import React, {Component} from 'react';
import classNames from 'classnames';
import user from 'assets/images/top_box/user.png';
import stock from 'assets/images/top_box/stock.png';
import {makePercent} from 'utils/tools';

class TopBox extends Component {

  className="top-box"

  renderName = name => {
    let valueClassName =this.className+'-name';
    return <span className={valueClassName}>{name}</span>
  }

  renderValue = value => {
    const rv = makePercent(value)
    const valueClassName =classNames(`${this.className}-value`,rv[0]==='-'?'green':'red');
    return <span className={valueClassName}>{rv}</span>
  }


  render() {
    const {className,props} = this;
    const {title,data,titleValue} = props;

    return (
      <div className={className}>
        <div className={`${className}-head`}>
          {this.renderName(title)}
          {this.renderValue(titleValue)}
        </div>

        <div className={`${className}-middle`}>
          <div className={`${className}-middle-left`}>
            {this.renderName('1日涨幅')}
            {this.renderValue(data.rise1)}
          </div>
          <div className={`${className}-middle-right`}>
            {this.renderName('3日涨幅')}
            {this.renderValue(data.rise3)}
          </div>
        </div>
        <div className={`${className}-middle`}>
          <div className={`${className}-middle-left`}>
            {this.renderName('5日涨幅')}
            {this.renderValue(data.rise5)}
          </div>
          <div className={`${className}-middle-right`}>
            {this.renderName('总结')}
            {this.renderValue(data.over_per)}
          </div>
        </div>

        <div className={`${className}-detail`}>
          <img className={`${className}-detail-img`} src={user}/>
          <span className={`${className}-detail-name`}>老师：</span>
          <span className={`${className}-detail-value`}>{data.teacher}</span>
        </div>

        <div className={`${className}-detail`}>
          <img className={`${className}-detail-img`} src={stock}/>
          <span className={`${className}-detail-name`}>股票名称：</span>
          <span className={`${className}-detail-value`}>{data.name}</span>
        </div>
      </div>
    )
  }
}

export default TopBox
