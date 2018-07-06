import './Chat.less';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import PageTitle from 'components/PageTitle/PageTitle';
import MessageBoxWithoutLoadMore from 'components/Chat/MessageBoxWithoutLoadMore';
import SendBox from 'components/Chat/SendBox';

class Chat extends Component {

  componentDidMount(){
    this.init();
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

  render() {

    console.log(`%cthis.props`, 'background:#00CC66;font-size:2em;color:yellow;font-weight:bold;');
    console.log(this.props);

    return (
      <div className="liveChat">
        <PageTitle title={'留言'}/>
        <MessageBoxWithoutLoadMore />
        <div className="blank-height-20" />
        <SendBox />
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    state:state.LiveVideo
  }
}

export default connect(mapStateToProps)(Chat)
