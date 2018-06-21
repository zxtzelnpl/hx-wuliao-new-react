import React, {Component} from 'react'

import Selection from '../Selection/Selection'

import './Header.less';

import logo from './icon_noli_logo_r.png';

const comprehensiveMaterials =[
  {
    text:'营销素材'
  },
  {
    text:'投资组合'
  }
];
const productMaterials =[
  {
    text:'强势优选组'
  },
  {
    text:'牛眼投资组'
  },
  {
    text:'强势选股组'
  },
  {
    text:'独立量化组'
  }
];
const childProducts = [
  {
    text:'短线宝'
  },
  {
    text:'君银操盘'
  },
  {
    text:'君银研究'
  }
];

class Header extends Component {


  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} />

        <div className="header-right">
          <div className="selections">
            <Selection list={comprehensiveMaterials}/>
            <Selection list={productMaterials}/>
            <Selection list={childProducts}/>
          </div>

          <div>
            直播间
          </div>

          <div className="user">
            <div className="info">

            </div>

            <div className="login">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
