import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

class SubMenuLinkForProduct extends PureComponent{

  getDelta(){
    const {total,beforeTotal} = this.props;
    let numberTotal = total||0;
    let numberBeforeTotal = beforeTotal||0;
    let delta = numberTotal - numberBeforeTotal;
    return delta;
  }

  renderDelta(){
    let dom = null;
    let delta = this.getDelta();
    if(delta>0){
      if(delta>9){
        delta = '*'
      }
      dom = <span className="sider-menu-sub-li-delta">（{delta}）</span>
    }
    return dom;
  }

  initTotal(){
    const {dispatch,actionTypes} = this.props;
    dispatch({
      type:actionTypes.TOTAL
    })
  }

  componentDidMount(){
    this.initTotal();
  }

  render(){
    const {url,path,title,router} = this.props
    const pathname = router.location.pathname;

    let to = `${url}/${path}`;
    let dom;
    if(to===pathname){
      dom = <li className="sider-menu-sub-li">
        <span className={"sider-menu-sub-li-content hint"}>{title}</span>
        {this.renderDelta()}
      </li>
    }else{
      dom = <li className="sider-menu-sub-li">
        <Link className={"sider-menu-sub-li-content"} to={to}>{title}</Link>
        {this.renderDelta()}
      </li>
    }

    return dom
  }
}

SubMenuLinkForProduct.propTypes={

}

export default SubMenuLinkForProduct;
