import React,{Component} from "react";
import propTypes from 'prop-types';
import PageTitle from 'components/PageTitle/PageTitle';
import Page from 'components/Pagination/Page';
import PageNumbers from 'components/Pagination/PageNumbers';

class ComprehensiveMaterialList extends Component {

  componentDidMount(){
    if(!this.props.data.receivedAt){
      this.intList();
    }
  }

  intList = ()=>{
    const {data,dispatch,actionTypes} = this.props;
    console.log(this.props.match)
    const {pageSize,currentPage} = data;
    let from = (currentPage-1)*pageSize;
    let to = currentPage*pageSize;

    dispatch({
      type:actionTypes.INIT,
      params:{
        from:from,
        to:to,
        sort:'DESC'
      }
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
    let dom = <div>暂无数据</div>;

    if(typeof data === 'object'){
      const {isFetching,total,list} =data;
      if(typeof total === 'number'&&typeof list === 'object'&&total!==0){
        dom = <Page
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
        <div style={{width:720,marginTop:15}}>
          <PageTitle title={title}/>
          {this.renderPage()}
          {this.renderPageNumbers()}
        </div>
    )
  }
}

ComprehensiveMaterialList.propTypes={
  title:propTypes.string.isRequired,
  match:propTypes.object.isRequired,
  data:propTypes.object.isRequired,
  dispatch:propTypes.func.isRequired,
  actionTypes:propTypes.object.isRequired,
}

export default ComprehensiveMaterialList;
