import './SubMenu.less'

import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

class subMenu extends Component {
  constructor(props) {
    super(props);
    this.handleUlShow = this.handleUlShow.bind(this);
    this.ul = React.createRef();
    this.height = 0;
    this.state={
      height:0,
      show:false
    }
  }

  componentDidMount(){
    const ul = this.ul.current;
    const li = ul.children  //TODO
    const num = li.length;
    let height = 0;

    if(li.length>0){
      height = li[0].clientHeight;
    }

    this.height = height*num;
  }

  handleUlShow(){

    this.setState(({height})=>{

      console.log(height)

      let newState = {
        height:0,
        show:false
      }
      if(height===0){
        newState.height = this.height;
        newState.show = true
      }
      return newState;
    })
  }

  render() {

    let className = classNames({
      siderSubMenuTitle:true,
      show:this.state.show
    });

    const {title, lis, url,pathname} = this.props;



    let list = lis.map((li, index) => {
      let to = `${url}/${li.path}`;
      let dom;
      if(to===pathname){
        dom = <li className="siderSubMenuLi" key={index}><span className={"siderSubMenuLiContent"}>{li.name}</span></li>
      }else{
        dom = <li className="siderSubMenuLi" key={index}><Link className={"siderSubMenuLiContent"} to={`${url}/${li.path}`}>{li.name}</Link></li>
      }

      return dom
    })

    return (
      <div className="siderSubMenu">
        <p className={className} onClick={this.handleUlShow}>{title}</p>
        <ul style={this.state} ref={this.ul}>
          {list}
        </ul>
      </div>);
  }
}

export default subMenu
