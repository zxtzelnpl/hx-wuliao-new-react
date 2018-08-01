import {Route} from 'react-router-dom';
import propTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from "react-redux";

class AuthorityRoute extends Component{
  render(){
    let {component:Component,notMatch:NotMatch,userName,...rest} = this.props;
    return  <Route
      {...rest}
      render={props =>
        userName ? (
          <Component {...props} />
        ) : (
          <NotMatch {...props} />
        )
      }
    />
  }
}

AuthorityRoute.propTypes={
  component:propTypes.func.isRequired,
  notMatch:propTypes.func.isRequired,
}

const mapStateToProps = state =>({
  userName:state.user.userName
})

export default connect(mapStateToProps)(AuthorityRoute)
