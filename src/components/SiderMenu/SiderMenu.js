import './SiderMenu.less'

import React, {Component} from 'react';
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
    this.handleUlShow = this.handleUlShow.bind(this);
    this.ul = React.createRef();
    this.height;
    this.state={
      height:'auto'
    }
  }

  componentDidMount(){
    this.height = this.ul.current.clientHeight;
    this.setState({
      height:this.height
    })
  }

  handleUlShow(){
    this.setState(({height})=>{
      let _height = height === this.height?0:this.height
      return {
        height:_height
      }
    })
  }

  renderSubMenus(){
    return datas.map((data,index)=>{
      return <li key={index}><SubMenu {...data}/></li>
    })
  }

  render() {
    return (
      <div className="siderMenu">
        <p className="siderMenuTitle" onClick={this.handleUlShow}>请选择产品素材</p>
        <ul style={this.state} ref={this.ul}>
          {this.renderSubMenus()}
        </ul>
      </div>
    )
  }
}

export default SiderMenu
