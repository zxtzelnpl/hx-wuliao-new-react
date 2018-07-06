import './StockPoolDetail.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import PageTitle from 'components/PageTitle/PageTitle';

class StockPoolDetail extends Component {

  componentDidMount(){
    const stock = this.getStock();
    console.log(stock);
    if(!stock.code){
      this.init();
    }
  }

  init(){
    const {match,dispatch} = this.props;
    const {params} = match;
    const {selectId} = params;
    dispatch({
      type:actionTypes.REQUEST,
      ...match.params,
      primaryPhaseId:selectId,
      concentratePhaseId:selectId
    })
  }

  getTitle = ()=>{
    let title;
    if(this.props.match.params.select === 'primary'){
      title = '初选股票池';
    }
    else{
      title = '精选股票池';
    }
    return title;
  }

  getStock = ()=>{
    const {match,data} = this.props;
    const {params} = match;
    const {select,id} = params;

    let pool=[],stock={};
    if(select === 'primary'){
      pool = data.primaryPhaseCurrent;
    }
    if(select === 'concentrate'){
      pool = data.concentratePhaseCurrent;
    }

    pool.forEach((item,index)=>{
      if(item.id === id){
        stock = item;
        stock.index = index;
      }
    })

    return stock;
  }

  renderStockContent = ()=>{
    const stock = this.getStock();

    const {index,name,code,content,url} = stock;

    return (
      <div className="stockPoolDetailContent">
        <div className="stockPoolContentHead">
          <div className="stockPoolContentHeadLeft">
            <span className="index">{index}</span>
            <span className="name">{name}</span>
            <span className="code">代码 ： {code}</span>
          </div>
          {<span className="primaryBtn">下载</span>}
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html:content}}/>
      </div>
    )

  }

  render() {
    let title = this.getTitle();
    return (
      <div className="stockPoolDetail">
        <PageTitle title={title}/>
        {this.renderStockContent()}
      </div>
    )
  }
}

const mapStateToProps =state=>({
  data:state.ResearchMaterial
});

export default connect(mapStateToProps)(StockPoolDetail);
