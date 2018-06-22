import './Header.less';

import logo from './icon_noli_logo_r.png';

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Selection from '../../Selection/Selection'
import {User} from 'components/User'


const comprehensiveMaterials =[
  {
    id:'one',
    key:'one',
    text:'营销素材'
  },
  {
    id:'two',
    key:'two',
    text:'投资组合'
  }
];
const productMaterials =[
  {
    id:'one',
    key:'one',
    text:'强势优选组'
  },
  {
    id:'two',
    key:'two',
    text:'牛眼投资组'
  },
  {
    id:'three',
    key:'three',
    text:'强势选股组'
  },
  {
    id:'four',
    key:'four',
    text:'独立量化组'
  }
];
const childProducts = [
  {
    id:'one',
    key:'one',
    text:'短线宝'
  },
  {
    id:'two',
    key:'two',
    text:'君银操盘'
  },
  {
    id:'three',
    key:'three',
    text:'君银研究'
  }
];

class Header extends Component {

  constructor(props){
    super(props)
    this.onHandleSelect = this.onHandleSelect.bind(this);
  }

  onHandleSelect(id){
    console.log('this.onHandleSelect: '+id)
  }

  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} />

        <div className="header-right">
          <div className="selections">
            <Selection
              list={comprehensiveMaterials}
              onSelect = {this.onHandleSelect}
            />
            <div className="blank-width-10" />
            <Selection
              list={productMaterials}
              onSelect = {this.onHandleSelect}
            />
            <div className="blank-width-10" />
            <Selection
              list={childProducts}
              onSelect = {this.onHandleSelect}
            />
          </div>

          <div className="blank-width-10" />

          <Link className="header-to-live" to="/">
            直播间
          </Link>

          <User />
        </div>
      </div>
    )
  }
}

export default Header;
