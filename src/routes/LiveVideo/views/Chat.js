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
    // setTimeout(this.refreshMessages,3000);
  }

  componentWillUnmount(){
    clearTimeout(this.refreshMessagesController)
  }

  init = ()=>{
    const {dispatch} = this.props;
    const score = new Date(2018,1,1).getTime() * 10;
    dispatch({
      type:actionTypes.INIT,
      params:{
        score:score
      }
    })
  }

  refreshMessages = ()=>{
    const {dispatch} = this.props;
    const score = new Date().getTime() * 10;
    dispatch({
      type:actionTypes.REQUEST,
      params:{
        score:score
      }
    })

    this.refreshMessagesController = setTimeout(this.refreshMessages,this.timeStop)
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
