import './List.less'

import React, {Component} from 'react'
import SiderMenu from 'components/SiderMenu/SiderMenu'
import SiderFeaturedVideos from 'components/SiderFeaturedVideo/SiderFeaturedVideos'
import {SiderMessageBox} from 'components/Chat'

class List extends Component {
  render() {
    return (
      <div className="marketingMaterialList">
        <SiderMenu />

        <div className="siderRecommend">
          <SiderFeaturedVideos />
          <SiderMessageBox />
        </div>
      </div>
    )
  }
}

export default List
