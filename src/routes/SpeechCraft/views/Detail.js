import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import PageTitle from 'components/PageTitle/PageTitle';
import PagePDFContent from 'components/PagePDFContent/PagePDFContent';
import PageHtmlContent from 'components/PageHtmlContent/PageHtmlContent';
import LittlePage from 'components/Pagination/LittlePage';
import * as server from '../service';

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
    const {match} = this.props;
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
    const {data,dispatch} = this.props;
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
    else if (info.filepath) {
      return <PagePDFContent filepath={info.filepath}/>
    }
    else if (info.content) {
      return <PageHtmlContent htmlDom={info.content}/>
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
    return (
      <div style={{width:720,marginTop:15}}>
        <PageTitle title={"营销话术"}/>
        {this.renderContent()}
        {this.renderLittlePage()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.SpeechCraft
})

export default connect(mapStateToProps)(Detail)
