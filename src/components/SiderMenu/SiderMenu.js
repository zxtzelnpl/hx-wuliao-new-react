import './SiderMenu.less'

import React, {Component} from 'react';
import {connect} from 'react-redux';
import SubMenu from './SubMenu';
import SubLink from './SubLink';


class SiderMenu extends Component {
  renderSubs = ()=>{

    console.log(this.props)

    const {match,menus,router} = this.props;

    return menus.map((data,index)=>{
      let sub;
      if(data.lis){
        sub = <li key={index}><SubMenu url={match.url} {...data} pathname={router.location.pathname}/></li>
      }
      else if(data.path){
        sub = <li key={index}><SubLink url={match.url} {...data} pathname={router.location.pathname}/></li>
      }
      return sub
    })
  }

  render() {
    return (
      <div className="siderMenu">
        <p className="siderMenuTitle" >请选择产品素材</p>
        <ul style={this.state} >
          {this.renderSubs()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  router:state.router
})

export default connect(mapStateToProps)(SiderMenu)
