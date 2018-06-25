import './Login.less';

import React, {Component} from 'react';
import {createPortal} from 'react-dom';

import LoginBox from './LoginBox';

class Login extends Component{

  constructor(props){
    super(props);
    this.handleClickShow = this.handleClickShow.bind(this);
    this.handleClickHide = this.handleClickHide.bind(this);
    this.state={
      show:true
    }
  }

  componentDidMount(){

  }

  handleClickShow(){
    this.setState({
      show:true
    })
  }

  handleClickHide(){
    this.setState({
      show:false
    })
  }

  render(){
    return <div className="login">
      <div className="btn" onClick={this.handleClickShow}>
        登录
      </div>
      {this.state.show&&<LoginBox hide={this.handleClickHide}/>}
    </div>
  }
}

export default Login
