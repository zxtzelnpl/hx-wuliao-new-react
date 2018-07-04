import './Alert.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../actionTypes';

class Alert extends Component{

  onHandleAnimationEnd = (e)=>{
    const id = e.target.getAttribute('data-id');
    this.props.dispatch({
      type:actionTypes.DEL,
      id
    })
  }

  renderItems = ()=>{
    return this.props.myAlert.map(item=>{
      const {id,message,className} = item;
      return <div key={id} data-id={id} className={`alert-child ${className}`} onAnimationEnd={this.onHandleAnimationEnd}>{message}</div>
    })
  }

  render(){
    return <div className="myAlert">
      {this.renderItems()}
    </div>
  }
}

const mapStateToProps = state=>({
  myAlert:state.myAlert
})

export default connect(mapStateToProps)(Alert)
