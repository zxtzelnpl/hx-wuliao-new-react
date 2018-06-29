import './SiderMenu.less'

import React, {Component} from 'react';
import SubMenu from './SubMenu';
import SubLink from './SubLink';


class SiderMenu extends Component {
  renderSubs = ()=>{
    return this.props.menus.map((data,index)=>{
      let sub;
      if(data.lis){
        sub = <li key={index}><SubMenu {...data}/></li>
      }
      else if(data.path){
        sub = <li key={index}><SubLink {...data}/></li>
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

export default SiderMenu
