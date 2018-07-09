import React, {Component} from 'react';
import propTypes from 'prop-types';
import PageTitle from 'components/PageTitle/PageTitle';
import PagePDFContent from 'components/PagePDFContent/PagePDFContent';
import PageHtmlContent from 'components/PageHtmlContent/PageHtmlContent';
import LittlePage from 'components/Pagination/LittlePage';

class ProductMaterialDetail extends Component {
  state = {
    info: null
  }

  getInfoFromStore = () => {
    const {match, data} = this.props;
    const {list} = data;
    let info = null;

    if(match.params.team!==data.team||
      match.params.child!==data.child
    ){
      return info
    }

    if (typeof list === 'object') {
      list.forEach(item => {
        if (item.id == match.params.id) {
          info = item;
        }
      })
    }
    return info;
  }

  getInfoFromServer = () => {
    const {match,server} = this.props;
    server
      .getDetail(match.params, {
        id: match.params.id
      })
      .then(json => {
        this.setState({
          info: json.info
        })
      })
  }

  componentDidMount() {
    let info = this.getInfoFromStore();
    if (info === null) {
      this.getInfoFromServer();
    }
    if(!this.props.data.receivedAt){
      this.initList()
    }
  }

  initList = ()=>{
    const {match,data,dispatch,actionTypes} = this.props;
    const {pageSize,currentPage} = data;
    let from = (currentPage-1)*pageSize;
    let to = currentPage*pageSize;

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

  renderContent = () => {
    let info = this.getInfoFromStore();
    if (info === null) {
      info = this.state.info;
    }

    if (info === null) {
      return <div>暂时没有数据哦</div>
    }
    else if (info.content) {
      return <PageHtmlContent htmlDom={info.content}/>
    }
    else if (info.filepath) {
      return <PagePDFContent filepath={info.filepath}/>
    }

  }

  renderLittlePage = () => {
    let dom = null;
    const {match,data} = this.props;

    if(typeof data.list ==='object'&&data.list.length>3){

      let url = match.url.split('/').slice(0,-2).join('/');
      let list = data.list.filter(item=>{
        return item.id!=match.params.id;
      })


      dom = <LittlePage
        list={list.slice(0,3)}
        url={url}
      />
    }

    return dom;
  }

  render() {
    const {title} = this.props;

    return (
      <div className="materialMarketingListPage">
        <PageTitle title={title}/>
        {this.renderContent()}
        {this.renderLittlePage()}
      </div>
    )
  }
}

ProductMaterialDetail.propTypes={
  title:propTypes.string.isRequired,
  data:propTypes.object.isRequired,
  match:propTypes.object.isRequired,
  dispatch:propTypes.func.isRequired,
  actionTypes:propTypes.object.isRequired,
  server:propTypes.object.isRequired
}

export default ProductMaterialDetail
