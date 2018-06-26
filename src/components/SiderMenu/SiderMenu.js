import './SiderMenu.less'

import React, {Component} from 'react';
import SubMenu from './SubMenu';
import SubLink from './SubLink';


const datas=[
  {
    title:'营销素材',
    lis:[
      {
        name:'产品案例',
        path:'abc'
      },
      {
        name:'战绩展示',
        path:'abc'
      },
    ]
  },
  {
    title:'策略素材',
    lis:[
      {
        name:'早评',
        path:'abc'
      },
      {
        name:'收评',
        path:'abc'
      },
      {
        name:'盘中解盘',
        path:'abc'
      },
    ]
  },
  {
    title:'体验素材',
    lis:[
      {
        name:'周报',
        path:'abc'
      },
      {
        name:'年报',
        path:'abc'
      },
    ]
  },
  {
    title:'客服素材',
    lis:[
      {
        name:'持仓分析',
        path:'abc'
      },
      {
        name:'服务食品',
        path:'abc'
      },
    ]
  },
  {
    title:'研究素材',
    path:'abc'
  },
  {
    title:'视频回播',
    path:'abc'
  },
]

class SiderMenu extends Component {

  constructor(props){
    super(props);
  }

  renderSubs(){
    return datas.map((data,index)=>{
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
