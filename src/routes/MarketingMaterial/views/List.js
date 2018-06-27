import './List.less';

import React, {Component} from 'react';
import SiderMenu from 'components/SiderMenu/SiderMenu';
import Page from 'components/Pagination/Page';
import SiderFeaturedVideos from 'components/SiderFeaturedVideo/SiderFeaturedVideos';
import {SiderMessageBox} from 'components/Chat';
import Loading from 'components/Loading/Loading';

class List extends Component {
  render() {
    return (
      <div className="marketingMaterialList">
        <SiderMenu />

        <div className="marketingMaterialListPage">
          <Page />
          <Loading />
        </div>

        <div className="siderRecommend">
          <SiderFeaturedVideos />
        </div>
      </div>
    )
  }
}

export default List
