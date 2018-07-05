import './StockPoolDetail.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import PageTitle from 'components/PageTitle/PageTitle';

class StockPoolDetail extends Component {

  render() {
    const {match} = this.props;
    const {params} = match;
    const {select,selectId,id} = params;

    console.log(match);

    let title;
    if(select === 'primary'){
      title = '初选股票池';
    }
    else{
      title = '精选股票池';
    }

    const index = 1;
    const name = '深圳华强';
    const code = '000062';

    return (
      <div className="stockPoolDetail">
        <PageTitle title={title}/>
        <div className="stockPoolDetailContent">
          <div className="stockPoolContentHead">
            <span className="index">{index}</span>
            <span className="name">{name}</span>
            <span className="code">代码 ： {code}</span>
            <span className="primaryBtn">下载</span>
          </div>
          <div className="content">

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps =state=>({
  data:state.ResearchMaterial
});

export default connect(mapStateToProps)(StockPoolDetail);
