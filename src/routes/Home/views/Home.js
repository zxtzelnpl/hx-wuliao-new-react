import './Home.less';

import React, {Component} from 'react';
import classNames from 'classnames';
import LinkIcon from './LinkIcon'
import FeaturedVideo from './FeaturedVideo'
import Carousel from './Carousel';
import {Chat} from 'components/Chat';
import Footer from './Footer'


class Home extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  render() {

    return (
      <div className="home">
        <div className="homeMaterialsShot">
          <div className="comprehensiveMaterial homeMaterials">
            <h4 className="title">
              综合素材
            </h4>
            <div className="links">
              <LinkIcon />
              <LinkIcon />
            </div>
          </div>

          <Carousel />

          <div className="productMaterial homeMaterials">
            <h4 className="title">
              产品素材
            </h4>
            <div className="links">
              <LinkIcon />
              <LinkIcon />
              <LinkIcon />
              <LinkIcon />
            </div>
          </div>
        </div>

        <div className="blank-height-30" />

        <div className="videosAndMessages">
          <div className="featuredVideos">
            <h4 className="title">
              精选视频
            </h4>

            <div className="featuredVideoBox">
              <FeaturedVideo />
              <FeaturedVideo />
              <FeaturedVideo />
              <FeaturedVideo />
              <FeaturedVideo />
              <FeaturedVideo />
              <FeaturedVideo />
              <FeaturedVideo />
              <FeaturedVideo />
            </div>
          </div>

          <div className="leavingMessage">
            <h4 className="title">
              留言
            </h4>
            <div className="leavingMessageBox">
              <Chat />
            </div>
          </div>
        </div>

        <div className="blank-height-30" />

        <Footer />
      </div>
    )
  }
}

export default Home;
