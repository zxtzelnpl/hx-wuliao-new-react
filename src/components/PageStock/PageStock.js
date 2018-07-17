import './PageStock.less';
import React, {Component} from 'react';
import moment from 'moment';
import PageTitle from 'components/PageTitle/PageTitle';
import StockTable from './StockTable';
import PageNumbers from 'components/Pagination/PageNumbers';
import Input from './Input';
import Select from './Select';
import RangePicker from './RangePicker';

class PageStock extends Component {

  dateFormat = 'YYYY/MM/DD';

  componentDidMount(){
    if(!this.props.data.receivedAt){
      this.intList();
    }
  }

  intList = ()=>{
    const {data,dispatch,actionTypes} = this.props;
    const {pageSize,currentPage} = data;
    let from = (currentPage-1)*pageSize;
    let to = currentPage*pageSize;
    console.log(data);

    dispatch({
      type:actionTypes.INIT,
      params:{
        from:from,
        to:to,
        sort:'DESC',
        condition:'[]'
      }
    })
  }

  turnPage = (currentPage)=>{
    const {data,dispatch,actionTypes} = this.props;
    const {pageSize} = data;
    let from = (currentPage-1)*pageSize;
    let to = currentPage*pageSize;

    dispatch({
      type:actionTypes.REQUEST,
      params:{
        from:from,
        to:to,
        sort:'DESC',
        condition:'[]'
      },
      currentPage
    })
  }

  renderPage = ()=>{
    const {data} = this.props;
    let dom = <div className="no-data">暂无数据</div>;

    if(typeof data === 'object'){
      const {isFetching,total,list} =data;
      if(typeof total === 'number'&&typeof list === 'object'&&total!==0){
        dom = <StockTable
          list={list}
          isFetching={isFetching}
        />
      }
    }

    return dom;
  }

  onOk = (a,b,c)=>{
    console.log(a)
    console.log(b)
    console.log(c)
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
    const {dateFormat,props} = this;
    const {title} = props;
    const className = 'stock-list';
    return (
      <div className={className}>
        <PageTitle title={title}/>

        <div className={`${className}-form`}>
          <div className={`${className}-form-line`}>
            <div className={`${className}-form-item`}>
              <Select />
            </div>
            <div className={`${className}-form-item`}>
              <Input />
            </div>
          </div>
          <div className={`${className}-form-line`}>
            <div className={`${className}-form-item`}>
              <RangePicker
                format={dateFormat}
                defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              />
            </div>
          </div>
        </div>

        {this.renderPage()}
        {this.renderPageNumbers()}
      </div>
    )
  }
}

export default PageStock
