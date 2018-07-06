import './Page.less';

import React, {Component} from 'react';
import propTypes from 'prop-types';
import Item from './Item';
import Loading from 'components/Loading/Loading';

class Page extends Component {

  renderList(){
    const {url,list} = this.props;
    return list.map(data=>(<Item key={data.id} linkUrl={url} {...data}/>))
  }

  render() {
    const {isFetching} = this.props;

    return (
      <div className="page">
        <ul className="onePage">
          {this.renderList()}
        </ul>
        {isFetching&&<Loading />}
      </div>
    )
  }
}

Page.propTypes={
  list:propTypes.array.isRequired,
  url:propTypes.string.isRequired
}

export default Page
