import './Page.less';

import React, {Component} from 'react';
import propTypes from 'prop-types';
import Item from './Item';


class Page extends Component {

  renderList(){
    const {list} = this.props;
    return list.map(data=>(<Item key={data.id} {...data}/>))
  }

  render() {
    return (
      <div className="page">
        <ul className="onePage">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

Page.propTypes={
  list:propTypes.array.isRequired
}

export default Page
