import './SiderMessageBox.less'

import React, {Component} from 'react'
import MessageBox from './MessageBox'

class SiderMessageBox extends Component {
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

  render() {
    return (
      <div className="siderMessageBox">
        <p className="siderMessageBoxTitle" onClick={this.handleUlShow}>留言</p>
        <div className="ul" ref={this.ul} style={this.state}>
          <MessageBox />
        </div>
      </div>
    )
  }
}

export default SiderMessageBox
