import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import Logout from './Logout';

class User extends Component {
  render() {
    return (
      <Login />
    )
  }
}

const mapStateToProps = state =>({
  user:state.user
})

export default connect(mapStateToProps)(User)
