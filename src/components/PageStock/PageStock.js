import './PageStock.less';
import React, {Component} from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import PageTitle from 'components/PageTitle/PageTitle';
import StockTable from './StockTable';
import PageNumbers from 'components/Pagination/PageNumbers';
import RangePicker from 'components/Form/RangePicker';
import {trim} from 'utils/tools';
import TopBox from './TopBox';
import Loading from 'components/Loading/Loading'

class PageStock extends Component {

  state = {
    name:'',
    from:'',
    to:'',
  }

  componentDidMount(){
    if(!this.props.data.receivedAt){
      this.intList();
    }
  }

  intList = ()=>{
    const {dispatch,actionTypes} = this.props;
    dispatch({
      type:actionTypes.INIT
    })
  }

  onChange = e=>{
    this.setState({
      [e.target.name]:trim(e.target.value)
    })
    console.log(this.state)
  }

  getConditions = ()=>{
    const {name,from,to} = this.state;
    let condition=[];
    if(name!==''){
      condition.push({
        field:'name',
        value:`'${name}'`
      })
    }
    if(from!==''||to!==''){
      let obj = {
        field:'buy_timestamp'
      }
      if(from!==''){
        obj.from=moment(from).unix();
      }
      if(to!==''){
        obj.to=moment(to).unix();
      }
      condition.push(obj)
    }

    return JSON.stringify(condition);
  }

  turnPage = (currentPage)=>{
    const {dispatch,actionTypes} = this.props;

    dispatch({
      type:actionTypes.REQUEST,
      currentPage
    })
  }

  orderChange = e=>{
    const order = e.target.getAttribute("data-order");
    const sort = e.target.getAttribute("data-sort");

    const {data,dispatch,actionTypes} = this.props;
    if(data.order!==order||data.sort!==sort){
      dispatch({
        type:actionTypes.ORDER,
        order,
        sort
      })
    }
  }

  onSubmit = ()=>{
    const {data,dispatch,actionTypes} = this.props;
    let condition = this.getConditions();
    if(condition!==data.condition){
      dispatch({
        type:actionTypes.CONDITION,
        condition:this.getConditions()
      })
    }
  }

  renderPage = ()=>{
    const {data} = this.props;
    let dom = null;

    const {isFetching,receivedAt,total,list,order,sort} =data;
    if(typeof total === 'number'&&typeof list === 'object'&&total!==0) {
      dom = <StockTable
        list={list}
        orderChange={this.orderChange}
        order={order}
        sort={sort}
      />
    }
    if(!isFetching&&receivedAt&&total===0){
      dom=<div className={"no-data"}>暂时没有数据</div>
    }
    return dom;
  }

  renderPageNumbers = ()=>{
    let dom = null;
    const {data} = this.props;
    if(typeof data === 'object'){
      const {total,currentPage,pageSize} = data;
      if(typeof total === 'number'&&total!==0){
        let totalPages = Math.ceil(total/pageSize);
        dom = <PageNumbers
          currentPage={currentPage}
          totalPages={totalPages}
          turnPage={this.turnPage}
        />
      }
    }


    return dom;
  }

  render() {
    const {props,state} = this;
    const {title,data} = props;
    const {name}=state;
    const {condition,rise1,rise3,rise5,over_per} = data;
    let subTitle='';
    JSON.parse(condition).map(item=>{
      if(item.field==='name'){
        subTitle+=`——股票名称：${item.value}`;
      }
      if(item.field==='buy_timestamp'){
        if(item.from){
          subTitle+='——开始时间：'+moment.unix(item.from).format('YYYY年MM月DD日');
        }
        if(item.to){
          subTitle+='——截止时间：'+moment.unix(item.to).format('YYYY年MM月DD日');
        }
      }
    });
    const className = 'stock-list';
    return (
      <div className={className}>

        <div className={`${className}-top-boxes`}>
          <TopBox dataList={rise1} title={'1日涨幅'} vKey={'rise1'} />
          <TopBox dataList={rise3} title={'3日涨幅'} vKey={'rise3'} />
          <TopBox dataList={rise5} title={'5日涨幅'} vKey={'rise5'} />
          <TopBox dataList={over_per} title={'总结'} vKey={'over_per'} />
        </div>

        <PageTitle title={`${title}${subTitle}`}/>

        <div className={`${className}-form`}>

          <div className={`${className}-form-item`}>
            <span className={`${className}-form-item-span`}>股票：</span>
            <input
              className={`${className}-form-item-input`}
              type="text"
              name={"name"}
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="blank-width-40" />
          <div className={`${className}-form-item`}>
            <RangePicker
              className={`${className}-form-item-range`}
              onChange={this.onChange}
            />
          </div>
          <div className="blank-width-30" />
          <div
            className={`${className}-btn`}
            onClick={this.onSubmit}
          >确认</div>
          <div className="blank-width-30" />
          <div className={`${className}-btn`} onClick={this.downloadData} style={{visibility:'hidden'}}>
            导出查询数据
          </div>
        </div>

        {this.renderPage()}
        {this.renderPageNumbers()}

        {data.isFetching&&<Loading />}
      </div>
    )
  }
}

PageStock.propTypes={
  data:propTypes.object,
  title:propTypes.string,
  actionTypes:propTypes.object
}

export default PageStock
