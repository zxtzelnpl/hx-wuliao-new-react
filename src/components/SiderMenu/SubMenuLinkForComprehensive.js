import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

class SubMenuLinkForComprehensive extends PureComponent{

  renderDelta(total,beforeTotal){

    let dom = null;
    let numberTotal = total||0;
    let numberBeforeTotal = beforeTotal||0;
    let delta = numberTotal - numberBeforeTotal;
    if(delta>0){
      if(delta>9){
        delta = '*'
      }
      dom = <span className="sider-menu-sub-li-delta">（{delta}）</span>
    }
    return dom;
  }

  changeBefore = ()=>{
    // const {changeBefore,nameSpace} = this.props;
    // changeBefore(nameSpace);
  }

  componentDidMount(){
    const {dispatch,actionTypes} = this.props;
    dispatch({
      type:actionTypes.TOTAL
    })
  }

  render(){
    const {url,path,title,router,total,beforeTotal} = this.props
    const pathname = router.location.pathname;

    let to = `${url}/${path}`;
    let dom;
    if(to===pathname){
      dom = <li className="sider-menu-sub-li">
        <span className={"sider-menu-sub-li-content hint"}>{title}</span>
        {this.renderDelta(total,beforeTotal)}
      </li>
    }else{
      dom = <li className="sider-menu-sub-li" onClick={this.changeBefore}>
        <Link className={"sider-menu-sub-li-content"} to={to}>{title}</Link>
        {this.renderDelta(total,beforeTotal)}
      </li>
    }

    return dom
  }
}

SubMenuLinkForComprehensive.propTypes={

}

export default SubMenuLinkForComprehensive;
