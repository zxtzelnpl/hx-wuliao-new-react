import './LoginBox.less';

import logo from 'src/assets/images/icon_noli_logo_r.png';

import React, {Component} from 'react';
import {createPortal} from 'react-dom';


class LoginBox extends Component{
  constructor(props){
    super(props);
    this.node = document.createElement('div');
    this.node.className='loginBoxWrap';
    document.body.appendChild(this.node);
  }

  componentWillUnmount(){
    document.body.removeChild(this.node);
  }

  render(){
    return createPortal(<div className="loginBox">

      <div className="close" onClick={this.props.hide} />

      <div className="box">
        <img src={logo} className="logo"/>
        <div className="boxInput">
          <input className="userName" type="text" placeholder="请输入用户名"/>
        </div>
        <div className="boxInput">
          <input className="password" type="text" placeholder="请输入密码"/>
        </div>
        <div className="boxInput forCode">
          <input className="code" type="text" placeholder="请输入验证码"/>
          <div className="codeImg" src=""/>
        </div>
        <div className="btn">
          登录
        </div>
      </div>

    </div>,this.node)
  }
}

export default LoginBox;
