import './ComprehensiveVideoMaterialList.less';
import React, {Component} from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import PageVideoFilePath from 'components/PageVideo/PageVideoFilePath';
import PageNumbers from 'components/Pagination/PageNumbers';
import Loading from 'components/Loading/Loading';


class List extends Component {

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

  turnPage = (currentPage)=>{
    const {dispatch,actionTypes} = this.props;
    dispatch({
      type:actionTypes.REQUEST,
      currentPage
    })
  }

  renderPage = ()=>{
    const {data} = this.props;
    let dom =null;

    const {total,list,receivedAt,isFetching} =data;
    if(typeof total === 'number'&&Array.isArray(list)&&total!==0){
      dom = <PageVideoFilePath
        list={list}
      />
    }

    if(!isFetching&&receivedAt&&total === 0){
      dom = <div className='no-data'>暂无数据</div>;
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
    const {isFetching} = this.props.data;
    return (
      <div className="comprehensive-video-material-list">
        <PageTitle title={title}/>
        {this.renderPage()}
        {this.renderPageNumbers()}
        {isFetching&&<Loading />}
      </div>
    )
  }
}

export default List
