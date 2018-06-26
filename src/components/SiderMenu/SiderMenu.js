import './SiderMenu.less'

import React, {Component} from 'react';
import classNames from 'classnames';
import SubMenu from './SubMenu';


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
    this.list = React.createRef();
    this.handleUlShow = this.handleUlShow.bind(this);
    this.state={
      show:true
    }
  }

  componentDidMount(){
    // let height = this.list.current.clientHeight;
  }

  handleUlShow(){
    this.setState(({show})=>{
      return {
        show:!show
      }
    })
  }

  renderSubMenus(){
    return datas.map((data,index)=>{
      return <li key={index}><SubMenu {...data}/></li>
    })
  }

  render() {
    let ulClassName=classNames({
      show:this.state.show
    })


    return (
      <div className="siderMenu">
        <p className="siderMenuTitle" onClick={this.handleUlShow}>请选择产品素材</p>
        <ul className={ulClassName} ref={this.list}>
          {this.renderSubMenus()}
        </ul>
      </div>
    )
  }
}

export default SiderMenu
