import './ChatBox.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
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

/*    dispatch({
      type:actionTypes.INIT,
      params:{
        from:0,
        to:20,
        sort:'DESC'
      }
    })*/
  }

  addMessage = (content)=>{
    const {dispatch,user} = this.props;

    dispatch({
      type:actionTypes.ADD,
      params:{
        id:user.id,
        content:content
      }
    })
  }

  render() {
    return (
      <div className="chatBox">
        <MessageBox />
        <div className="blank-height-20" />
        <SendBox />
      </div>
    )
  }
}

const mapStateToProps = state =>({
  user:state.user,
  data:state.SiderChatBox
})

export default connect(mapStateToProps)(ChatBox)
