import './Chat.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import PageTitle from 'components/PageTitle/PageTitle';
import MessageBoxWithoutLoadMore from 'components/Chat/MessageBoxWithoutLoadMore';
import SendBox from 'components/Chat/SendBox';

class Chat extends Component {

  refreshMessagesController = null;
  timeStop = 3000;

  componentDidMount(){
    this.init();
    this.refreshMessagesController = setInterval(this.refreshMessages,this.timeStop);
  }

  componentWillUnmount(){
    clearTimeout(this.refreshMessagesController)
  }

  init = ()=>{
    const {dispatch} = this.props;
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const score = new Date(year,month-1,date).getTime() * 10;
    dispatch({
      type:actionTypes.INIT,
      params:{
        score,
      }
    })
  }

  refreshMessages = ()=>{

    const {dispatch} = this.props;
    dispatch({
      type:actionTypes.REQUEST
    })
  }

  sendMessage = (content) =>{
    const {dispatch} = this.props;

    dispatch({
      type:actionTypes.ADD,
      params:{
        content
      }
    })
  }

  render() {
    const {list,receivedAt,isFetching} = this.props.data;

    return (
      <div className="liveChat">
        <PageTitle title={'聊天'}/>
        <MessageBoxWithoutLoadMore
          list={list}
          receivedAt={receivedAt}
          isFetching={isFetching}
        />
        <div className="blank-height-20" />
        <SendBox sendMessage={this.sendMessage}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    data:state.LiveVideo
  }
}

export default connect(mapStateToProps)(Chat)
