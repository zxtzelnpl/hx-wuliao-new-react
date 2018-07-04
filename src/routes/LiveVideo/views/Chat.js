import './Chat.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PageTitle from 'components/PageTitle/PageTitle'
import MessageBox from 'components/Chat/MessageBox';
import LiveSendBox from 'components/Chat/LiveSendBox';

class Chat extends Component {

  componentDidMount(){
    fetch('http://test.com/api/livevideo/chat/page',{
      method:'POST', //请求方式为POST
      credentials: 'include',//所有请求都会带上cookie
      header:{
        Accept: 'application/json',                            //接受的数据为JSON格式
        'Content-Type': 'application/json; charset=utf-8', //请求数据为JSON格式
      }
    })
      .then(res=>res.json())
      .then(json=>{
        console.log(json);
      })
  }

  render() {

    console.log(`%cthis.props`, 'background:#00CC66;font-size:2em;color:yellow;font-weight:bold;');
    console.log(this.props);

    return (
      <div className="liveChat">
        <PageTitle title={'留言'}/>
        <MessageBox />
        <div className="blank-height-20" />
        <LiveSendBox />
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    livechat:state.livechat
  }
}

export default connect(mapStateToProps)(Chat)
