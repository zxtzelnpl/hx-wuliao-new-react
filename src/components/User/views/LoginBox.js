import './LoginBox.less';

import logo from 'assets/images/bigLogo.png';
import refresh from 'assets/images/refresh.png';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import {actionTypes as alertActionTypes} from 'components/Alert';
import {createPortal} from 'react-dom';


class LoginBox extends Component{
  constructor(props){
    super(props);
    this.node = document.createElement('div');
    this.node.className='loginBoxWrap';
    document.body.appendChild(this.node);
    this.state = {}
  }

  componentWillUnmount(){
    document.body.removeChild(this.node);
  }

  componentDidMount(){
    const {code} = this.props;

    if(!code){
      this.getCode()
    }

  }

  getCode = ()=>{
    this.props.dispatch({
      type:actionTypes.REQUEST_CODE
    })
  }

  handleChange = e=>{
    let {name,value} = e.target;
    this.setState({
      [name]:value
    })
  }

  handleSubmit = () =>{
    const dispatch = this.props.dispatch;
    const {userName,passWord,code} = this.state;

    if(!code||code.length!==4){
      return dispatch({
        type:alertActionTypes.WARNING,
        message:'验证码是4位'
      })
    }

    if(!userName){
      return dispatch({
        type:alertActionTypes.WARNING,
        message:'请输入用户名'
      })
    }

    if(!passWord){
      return dispatch({
        type:alertActionTypes.WARNING,
        message:'请输入密码'
      })
    }

    return this.props.dispatch({
      type:actionTypes.REQUEST,
      ...this.state
    })
  }

  renderCodeImg = ()=>{
    let dom = null;
    const {code,isFetching} = this.props;

    if(isFetching==='code'){
      dom = <img onClick={this.getCode} className="noCodeImg fetching disable" src={refresh}/>
    }
    else if(code){
      dom = <img onClick={this.getCode} className="codeImg btn" src={code}/>
    }
    else{
      dom = <img onClick={this.getCode} className="noCodeImg btn" src={refresh}/>
    }
    return dom;
  }

  render(){
    return createPortal(<div className="loginBox">

      <div className="close" onClick={this.props.hide} />

      <div className="box">
        <img src={logo} className="logo"/>
        <div className="boxInput">
          <input className="userName" type="text" name="userName" placeholder="请输入用户名" onChange={this.handleChange}/>
        </div>
        <div className="boxInput">
          <input className="password" type="text" name="passWord" placeholder="请输入密码" onChange={this.handleChange}/>
        </div>
        <div className="boxInput forCode">
          <input className="code" type="text" name="code" placeholder="请输入验证码" onChange={this.handleChange}/>
          {this.renderCodeImg()}
        </div>
        <div className="login btn" onClick={this.handleSubmit}>
          登录
        </div>
      </div>

    </div>,this.node)
  }
}

const mapStateToProps = state=>({
  code:state.user.code,
  isFetching:state.user.isFetching
})

export default connect(mapStateToProps)(LoginBox);
