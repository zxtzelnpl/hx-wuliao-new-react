import './NotAuthority.less';

import user from 'assets/not_match/user.png';
import password from 'assets/not_match/password.png';
import warning from 'assets/not_match/warning.png';
import refresh from 'assets/images/refresh.png';

import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';
import {actionTypes as alertActionTypes} from 'components/Alert';

import React, {Component} from 'react';


class NotAuthority extends Component {

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
      dom = <img onClick={this.getCode} className="code-img fetching disable" src={refresh}/>
    }
    else if(code){
      dom = <img onClick={this.getCode} className="code-img btn" src={code}/>
    }
    else{
      dom = <img onClick={this.getCode} className="code-img btn" src={refresh}/>
    }
    return dom;
  }

  render() {
    const className = "not-authority";

    return (
      <div className={className}>
        <div className={`${className}-wrap`}>
          <div className={`${className}-box`}>
            <div className={`${className}-title`}>
              <span className={`${className}-title-text`}>请登录</span>
              <img className={`${className}-title-img`} src={warning} alt=""/>
            </div>

            <div className={`${className}-user`}>
              <img className={`${className}-user-img`} src={user} />
              <input name={"userName"} className={`${className}-user-input`} type="text" placeholder={"用户名/邮箱"} onChange={this.handleChange}/>
            </div>

            <div className={`${className}-password`}>
              <img className={`${className}-password-img`} src={password} />
              <input name={"passWord"} className={`${className}-password-input`} type="text" placeholder={"密码"} onChange={this.handleChange}/>
            </div>

            <div className={`${className}-code`}>
              <input name={"code"} className={`${className}-code-input`} type="text" placeholder={"验证码"} onChange={this.handleChange}/>
              {this.renderCodeImg()}
            </div>

            <div className={`${className}-btn`} onClick={this.handleSubmit}>
              登录
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state=>({
  code:state.user.code,
  isFetching:state.user.isFetching
})

export default connect(mapStateToProps)(NotAuthority);
