import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import PageTitle from 'components/PageTitle/PageTitle';
import Page from 'components/Pagination/Page';
import PageNumbers from 'components/Pagination/PageNumbers';

class List extends Component {

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
    const {match,data,dispatch} = this.props;
    console.log(this.props.match)
    const {pageSize,currentPage} = data;
    let from = (currentPage-1)*pageSize;
    let to = currentPage*pageSize;
    console.log(data);

    dispatch({
      type:actionTypes.INIT,
      urlParams:match.params,
      params:{
        from:from,
        to:to,
        sort:'DESC'
      }
    })
  }

  turnPage = (currentPage)=>{
    const {match,data,dispatch} = this.props;
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
    const {match,data} = this.props;
    let dom = <div>暂无数据</div>;

    if(typeof data === 'object'){
      const {isFetching,total,list} =data;
      if(typeof total === 'number'&&typeof list === 'object'&&total!==0){
        const url = match.url;
        dom = <Page
          list={list}
          url={url}
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
    return (
      <div style={{width:720,marginTop:15}}>
        <PageTitle title={"营销话术"}/>
        {this.renderPage()}
        {this.renderPageNumbers()}
      </div>
    )
  }
}


const mapStateToProps = state =>({
  data:state.SpeechCraft
})

export default connect(mapStateToProps)(List)
