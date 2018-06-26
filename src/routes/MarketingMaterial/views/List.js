import './List.less';

import React, {Component} from 'react';
import SiderMenu from 'components/SiderMenu/SiderMenu';
import Page from 'components/Pagination/Page';
import SiderFeaturedVideos from 'components/SiderFeaturedVideo/SiderFeaturedVideos';
import {SiderMessageBox} from 'components/Chat';

class List extends Component {
  render() {
    return (
      <div className="marketingMaterialList">
        <SiderMenu />

        <div className="marketingMaterialListPage">
          <Page />
        </div>

        <div className="siderRecommend">
          <SiderFeaturedVideos />
          <SiderMessageBox />
        </div>
      </div>
    )
  }
}

export default List
