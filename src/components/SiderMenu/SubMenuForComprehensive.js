import React, {Component} from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

class subMenuForC extends Component {
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
    this.UlInit();
  }

  UlInit(){
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
    const {hasNew} = this.props;
    let className = classNames('sider-menu-sub-title', {
      show: this.state.show,
      hasNew
    });

    const {title} = this.props;

    return (
      <li>
        <div className="sider-menu-sub">
          <p className={className} onClick={this.handleUlShow}>{title}</p>
          <ul style={this.state} ref={this.ul}>
            {this.props.children}
          </ul>
        </div>
      </li>
    );
  }
}

subMenuForC.propTypes={
  url:propTypes.string,
  pathname:propTypes.string,
}

export default subMenuForC
