import './ChatBox.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import {actionTypes as alertActionTypes} from 'components/Alert';
import MessageBox from 'components/Chat/MessageBox';
import SendBox from 'components/Chat/SendBox';

class ChatBox extends Component {
  componentDidMount(){
    if(!this.props.data.receivedAt){
      this.init()
    }
  }

  init = ()=>{
    const {dispatch} = this.props;

    dispatch({
      type:actionTypes.INIT
    })
  }

  getMessage = ()=>{
    const {dispatch} = this.props;

    dispatch({
      type:actionTypes.REQUEST
    })
  }


  sendMessage = (content)=>{
    const {dispatch,user} = this.props;

    if(!user.id){
      dispatch({
        type:alertActionTypes.ERROR,
        message:'你还没有登录'
      })
    }
    else{
      dispatch({
        type:actionTypes.ADD,
        params:{
          id:user.id,
          content:content
        }
      })
    }
  }

  render() {
    const {data} = this.props;

    return (
      <div className="chatBox">
        <MessageBox
          list = {data.list}
          receivedAt = {data.receivedAt}
          isFetching = {data.isFetching}
          loadMore = {this.getMessage}
          hasMore={data.hasMore}
        />
        <div className="blank-height-20" />
        <SendBox
          sendMessage={this.sendMessage}
        />
      </div>
    )
  }
}

const mapStateToProps = state =>({
  user:state.user,
  data:state.SiderChatBox
})

export default connect(mapStateToProps)(ChatBox)
