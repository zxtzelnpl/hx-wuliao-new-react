import React, {Component} from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

class SubLinkForProduct extends Component {
  componentDidMount(){
    console.log(this.props)
  }

  render(){
    const {match,path,title,router} = this.props;
    let url = match.url;
    let to = `${url}/${path}`;
    let className = 'sider-sub-link-title'

    return <Link className={className} to={to}>{title}</Link>
  }
}

SubLinkForProduct.propTypes={

}

export default SubLinkForProduct
