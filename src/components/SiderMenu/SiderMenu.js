import './SiderMenu.less'

import React, {Component} from 'react';
import * as actionTypes from './actionTypes';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SubMenu from './SubMenu';
import SubMenuLi from './SubMenuLi';
import SubLink from './SubLink';


class SiderMenu extends Component {

  componentDidMount(){
    console.log('%cSiderMenu-componentDidMount','background:blue;')
    console.log(this.props);
    this.props.dispatch({
      type:actionTypes.TOTAL
    })
  }

  componentDidUpdate(){

  }

  renderSubs = ()=>{
    const {match,menus,router} = this.props;

    return menus.map((data,index)=>{
      let sub;
      if(data.lis){
        const {lis,...rest} = data;
        sub = <SubMenu key={index} {...rest}>
          {this.renderLis(lis)}
        </SubMenu>
      }
      else if(data.path){
        sub = <SubLink key={data.nameSpace} url={match.url} pathname={router.location.pathname} {...data}/>
      }
      return sub
    })
  }

  renderLis = lis=>{
    const {match,router} = this.props;
    return lis.map(li=>(<SubMenuLi key={li.nameSpace} url={match.url} pathname={router.location.pathname} {...li}/>))
  }

  render() {
    const {title} = this.props;
    return (
      <div className="siderMenu">
        <p className="siderMenuTitle" >请选择{title}</p>
        <ul style={this.state} >
          {this.renderSubs()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  ...state
})

SiderMenu.propTypes={
  menus:PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(SiderMenu)
