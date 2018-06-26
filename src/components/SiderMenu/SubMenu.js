import './SubMenu.less'

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class subMenu extends Component {
  constructor(props) {
    super(props);
    this.handleUlShow = this.handleUlShow.bind(this);
    this.ul = React.createRef();
    this.height;
    this.state={}
  }

  componentDidMount(){
    const ul = this.ul.current;
    const li = ul.children()  //TODO
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

  render() {
    const {title, lis} = this.props;
    let list = lis.map((li, index) => {
      return <li className="siderSubMenuLi" key={index}><Link to={li.path}>{li.name}</Link></li>
    })

    return (
      <div className="siderSubMenu">
        <p className="siderSubMenuTitle" onClick={this.handleUlShow}>{title}</p>
        <ul style={this.state} ref={this.ul}>
          {list}
        </ul>
      </div>);
  }
}

export default subMenu
