import './SiderMenu.less';

import React, {Component} from 'react';
import * as actionTypes from '../actionTypes';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';
import SubMenuLi from './SubMenuLi';
import SubLink from './SubLink';

class SiderMenu extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.initTotal()
  }

  componentDidUpdate(){
    console.log('%cSiderMenuForProduct-componentDidUpdate','background:yellow;color:green;');
    if(this.props.data.team!==this.props.match.params.team||
      this.props.data.child!==this.props.match.params.child
    ){
      this.initTotal();
    }
  }

  initTotal(){
    const {menus,dispatch,match, router,} = this.props;
    const urlParams = match.params;
    const url = match.url;
    const pathname = router.location.pathname;
    let nameSpaceArray = [];
    let serviceArray = [];
    let initPageNameSpace = '';

    menus.forEach(menu => {
      menu.lis.forEach(li => {
        let to = `${url}/${li.path}`;
        if(to===pathname){
          initPageNameSpace = li.nameSpace;
        }

        nameSpaceArray.push(li.nameSpace);
        serviceArray.push(li.service);
      })
    })

    dispatch({
      type: actionTypes.REQUEST,
      nameSpaceArray,
      serviceArray,
      initPageNameSpace,
      urlParams
    })
  }

  changeBefore = (nameSpace)=>{
    this.props.dispatch({
      type: actionTypes.BEFORE,
      liNameSpace:nameSpace
    })
  }

  renderSubs = () => {
    const {match, menus, router} = this.props;

    return menus.map((data, index) => {
      let sub;
      if (data.lis) {
        const {lis, ...rest} = data;
        sub = this.renderSubMenu(lis, index, rest);
      }
      else if (data.path) {
        sub = <SubLink key={data.nameSpace} url={match.url} pathname={router.location.pathname} {...data}/>
      }
      return sub
    })
  }

  renderSubMenu = (lis, index, rest) => {
    const {match, router, data} = this.props;
    const {total, beforeTotal} = data;
    let hasNew = false;
    const dom = lis.map(li => {
      let li_total = total[li.nameSpace] || 0;
      let li_beforeTotal = beforeTotal[li.nameSpace] || 0;
      let d_total = li_total - li_beforeTotal;

      if (d_total > 0) {
        hasNew = true
      }
      return <SubMenuLi
        key={li.nameSpace}
        changeBefore={this.changeBefore}
        url={match.url}
        pathname={router.location.pathname}
        delta={d_total}
        {...li}
      />
    });

    return <SubMenu
      hasNew={hasNew}
      key={index}
      {...rest}
    >
      {dom}
    </SubMenu>
  }

  render() {
    const {title} = this.props;
    return (
      <div className="sider-menu">
        <p className="sider-menu-title">请选择{title}</p>
        <ul style={this.state}>
          {this.renderSubs()}
        </ul>
      </div>
    )
  }
}

SiderMenu.propTypes = {
  menus: PropTypes.array.isRequired,
}

export default SiderMenu
