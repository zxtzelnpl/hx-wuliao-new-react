import './PageStock.less';
import React, {Component} from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import StockTable from 'components/StockTable/StockTable';
import PageNumbers from 'components/Pagination/PageNumbers';


class PageStock extends Component {
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
    const {title} = this.props;

    return (
      <div className="stock-list">
        <PageTitle title={title}/>
        {this.renderPage()}
        {this.renderPageNumbers()}
      </div>
    )
  }
}

export default PageStock
