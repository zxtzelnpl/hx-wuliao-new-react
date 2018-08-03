import './SubMenu.less'

import React, {Component} from 'react';
import classNames from 'classnames';

class subMenu extends Component {
  constructor(props) {
    super(props);
    this.handleUlShow = this.handleUlShow.bind(this);
    this.ul = React.createRef();
    this.height = 0;
    this.state = {
      height: 0,
      show: false
    }
  }

  componentDidMount() {
    const ul = this.ul.current;
    const li = ul.children  //TODO
    const num = li.length;
    let height = 0;

    if (li.length > 0) {
      height = li[0].clientHeight;
    }

    this.height = height * num;
  }

  handleUlShow() {

    this.setState(({height}) => {
      let newState = {
        height: 0,
        show: false
      }
      if (height === 0) {
        newState.height = this.height;
        newState.show = true
      }
      return newState;
    })
  }

  render() {

    let className = classNames('siderSubMenuTitle', {
      show: this.state.show
    });

    const {title} = this.props;

    return (
      <li>
        <div className="siderSubMenu">
          <p className={className} onClick={this.handleUlShow}>{title}</p>
          <ul style={this.state} ref={this.ul}>
            {this.props.children}
          </ul>
        </div>
      </li>
    );
  }
}

export default subMenu
