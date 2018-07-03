import React, {Component} from 'react';
import { push } from 'connected-react-router';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes'


class Home extends Component {

  constructor(props){
    super(props)
    this.handleClickFetch = this.handleClickFetch.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleClickPush = this.handleClickPush.bind(this);
  }

  handleClickFetch (){
    this.props.dispatch({
      type:actionTypes.REQUEST
    })
  }

  handleClickCancel(){
    this.props.dispatch({
      type:actionTypes.CANCEL
    })
  }

  handleClickPush(){
    this.props.dispatch(push('/yes'))
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  render() {
    return (
      <div>
        <p>home</p>
        <p>1</p>
        <button onClick={this.handleClickFetch}>按钮</button>
        <button onClick={this.handleClickCancel}>取消</button>
        <div onClick={this.handleClickPush}>跳转</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    home:state.home
  }
}

export default connect(mapStateToProps)(Home);
