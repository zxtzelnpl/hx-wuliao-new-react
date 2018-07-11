import React, {Component} from 'react';
import propTypes from 'prop-types';
import PageTitle from 'components/PageTitle/PageTitle';
import PagePDFContent from 'components/PagePDFContent/PagePDFContent';
import PageHtmlContent from 'components/PageHtmlContent/PageHtmlContent';
import PagePPTXContent from 'components/PagePPTXContent/PagePPTXContent';
import PageDOCContent from 'components/PageDOCContent/PageDOCContent';
import LittlePage from 'components/Pagination/LittlePage';
import {pdfReg, pptReg,docReg} from "src/utils/tools";

class Detail extends Component {

  state = {
    info: null
  }

  getInfoFromStore = () => {
    const {match, data} = this.props;
    const {list} = data;
    let info = null;

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
    const {match,services} = this.props;
    services
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
    if (info.content!==''&&info.content!==null) {
      return <PageHtmlContent htmlDom={info.content}/>
    }
    if (info.filepath&&pdfReg.test(info.filepath)) {
      return <PagePDFContent filepath={info.filepath}/>
    }
    if(info.filepath&&pptReg.test(info.filepath)){
      return <PagePPTXContent title={info.title} filepath={info.filepath}/>
    }
    if(info.filepath&&docReg.test(info.filepath)){
      return <PageDOCContent title={info.title} filepath={info.filepath}/>
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
        <div style={{width:720,marginTop:15}}>
          <PageTitle title={title}/>
          {this.renderContent()}
          {this.renderLittlePage()}
        </div>
    )
  }
}

export default Detail;
