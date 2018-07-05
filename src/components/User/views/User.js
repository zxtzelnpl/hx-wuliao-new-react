import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes'
import Login from './Login';
import Logout from './Logout';

class User extends Component {

  logout = ()=>{
    this.props.dispatch({
      type:actionTypes.LOGOUT
    })
  }

  render() {
    let dom = null
    const {userName} = this.props;
    if(userName){
      dom = <Logout
        userName={userName}
        logout={this.logout}
      />
    }
    else{
      dom = <Login />
    }

    return dom
  }
}

const mapStateToProps = state =>({
  userName:state.user.userName
})

export default connect(mapStateToProps)(User)
