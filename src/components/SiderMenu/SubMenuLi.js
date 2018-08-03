import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

class subMenuLi extends PureComponent{


  render(){
    const {url,path,name,pathname} = this.props

    let to = `${url}/${path}`;
    let dom;
    if(to===pathname){
      dom = <li className="siderSubMenuLi"><span className={"siderSubMenuLiContent"}>{name}</span></li>
    }else{
      dom = <li className="siderSubMenuLi"><Link className={"siderSubMenuLiContent"} to={to}>{name}</Link></li>
    }

    return dom
  }
}

export default subMenuLi;
