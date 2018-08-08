import './ProductMaterialList.less';

import React, {Component} from 'react';
import propTypes from 'prop-types';
import PageTitle from 'components/PageTitle/PageTitle';
import Page from 'components/Pagination/Page';
import PageNumbers from 'components/Pagination/PageNumbers';
import Loading from 'components/Loading/Loading';

class ProductMaterialList extends Component {
  componentDidMount(){
    if(!this.props.data.receivedAt||
      this.props.data.team!==this.props.match.params.team||
      this.props.data.child!==this.props.match.params.child
    ){
      this.intList();
    }
  }

  componentDidUpdate(){
    if(this.props.data.team!==this.props.match.params.team||
      this.props.data.child!==this.props.match.params.child
    ){
      this.intList();
    }
  }

  intList = ()=>{
    const {match,dispatch,actionTypes} = this.props;

    dispatch({
      type:actionTypes.INIT,
      urlParams:match.params
    })
  }

  turnPage = (currentPage)=>{
    const {match,data,dispatch,actionTypes} = this.props;
    const {pageSize} = data;
    let from = (currentPage-1)*pageSize;
    let to = currentPage*pageSize;

    dispatch({
      type:actionTypes.REQUEST,
      urlParams:match.params,
      params:{
        from:from,
        to:to,
        sort:'DESC'
      },
      currentPage
    })
  }

  renderPage = ()=>{
    const {data} = this.props;
    let dom = null;

    const {isFetching,total,list,receivedAt} =data;
    if(typeof total === 'number'&&typeof list === 'object'&&total!==0){
      dom = <Page
        list={list}
        isFetching={isFetching}
      />
    }

    if(!isFetching&&receivedAt&&total===0){
      dom = <div className={'no-data'}>暂无数据</div>;
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
    const {title,data} = this.props;
    const {isFetching} = data;

    return (
      <div className="materialMarketingListPage">
        <PageTitle title={title}/>
        {this.renderPage()}
        {this.renderPageNumbers()}
        {isFetching&&<Loading />}
      </div>
    )
  }
}

ProductMaterialList.propTypes={
  title:propTypes.string.isRequired,
  data:propTypes.object.isRequired,
  match:propTypes.object.isRequired,
  dispatch:propTypes.func.isRequired,
  actionTypes:propTypes.object.isRequired
}

export default ProductMaterialList
