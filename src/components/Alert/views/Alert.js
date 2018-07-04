import './Alert.less';

import React, {Component} from 'react';
import {connect} from 'react-redux';

class Alert extends Component{

  componentWillUnmount(){
    document.body.removeChild(this.node);
  }

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  onHandleAnimationEnd(){

  }

  renderItems = ()=>{
    return this.props.myAlert.map(item=>{
      const {id,message,className} = item;
      return <div key={id} className={`alert-child ${className}`}>{message}</div>
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
