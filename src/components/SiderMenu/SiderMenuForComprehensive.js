import './SiderMenuForComprehensive.less';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SubMenuForComprehensive from './SubMenuForComprehensive';


class SiderMenu extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   const {menus,dispatch,match, router,} = this.props;
  //   const url = match.url;
  //   const pathname = router.location.pathname;
  //   let nameSpaceArray = [];
  //   let serviceArray = [];
  //   let initPageNameSpace = '';
  //   menus.forEach(menu => {
  //     menu.lis.forEach(li => {
  //       let to = `${url}/${li.path}`;
  //       if(to===pathname){
  //         initPageNameSpace = li.nameSpace;
  //       }
  //
  //       nameSpaceArray.push(li.nameSpace);
  //       serviceArray.push(li.service);
  //     })
  //   })
  //
  //   dispatch({
  //     type: actionTypes.REQUEST,
  //     nameSpaceArray,
  //     serviceArray,
  //     initPageNameSpace
  //   })
  // }

  // changeBefore = (nameSpace)=>{
  //   this.props.dispatch({
  //     type: actionTypes.BEFORE,
  //     liNameSpace:nameSpace
  //   })
  // }

  // renderSubs = () => {
  //   return this.props.menus.map((data, index) => {
  //     const {lis, ...rest} = data;
  //     return this.renderSubMenu(lis, index, rest);
  //   })
  // }
  //
  // renderSubMenu = (lis, index, rest) => {
  //   const {match} = this.props;
  //   let hasNew = false;
  //   const dom = lis.map(li => {
  //     return <li.ComprehensiveLink key={li.nameSpace} url={match.url}/>
  //   });
  //
  //   return <SubMenuForComprehensive
  //     hasNew={hasNew}
  //     key={index}
  //     {...rest}
  //   >
  //     {dom}
  //   </SubMenuForComprehensive>
  // }

  renderSubs = () => {
    const {menus,match} = this.props;

    return menus.map((data,index) => {
      return <SubMenuForComprehensive {...data} key={index} url={match.url}/>
    })
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
