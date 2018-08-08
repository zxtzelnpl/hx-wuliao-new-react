import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

class subMenuLi extends PureComponent{

  renderDelta(delta){
    let dom = null;
    if(delta>0){
      if(delta>9){
        delta = '*'
      }
      dom = <span className="sider-menu-sub-li-delta">（{delta}）</span>
    }
    return dom;
  }

  // changeBefore = ()=>{
  //   const {changeBefore,nameSpace} = this.props;
  //   changeBefore(nameSpace);
  // }

  render(){
    const {url,path,name,pathname,delta} = this.props

    let to = `${url}/${path}`;
    let dom;
    if(to===pathname){
      dom = <li className="sider-menu-sub-li">
        <span className={"sider-menu-sub-li-content hint"}>{name}</span>
        {this.renderDelta(delta)}
      </li>
    }else{
      dom = <li className="sider-menu-sub-li" onClick={this.changeBefore}>
        <Link className={"sider-menu-sub-li-content"} to={to}>{name}</Link>
        {this.renderDelta(delta)}
      </li>
    }

    return dom
  }
}

export default subMenuLi;
