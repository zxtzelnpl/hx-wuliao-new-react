import './Home.less';

import React, {Component} from 'react';
import LinkIcon from './LinkIcon';
import FeaturedVideos from './FeaturedVideos';
import Carousel from './Carousel';
import {ChatBox} from 'components/SiderChatBox';
import Footer from './Footer';
import img_investment from 'assets/images/investment.png';
import img_productMarket from 'assets/images/productMarket.png';
import team_dllh from 'assets/images/team_dllh.png';
import team_nytz from 'assets/images/team_nytz.png';
import team_qsxg from 'assets/images/team_qsxg.png';
import team_qsyx from 'assets/images/team_qsyx.png';

class Home extends Component {

  render() {

    return (
      <div className="home">
        <div className="homeMaterialsShot">
          <div className="comprehensiveMaterial homeMaterials">
            <h4 className="title">
              综合素材
            </h4>
            <div className="links">
              <LinkIcon
                img={img_productMarket}
                text={"营销素材"}
                white={true}
                url={"/comprehensive/marketing/speechcraft"}
              />
              <LinkIcon
                img={img_investment}
                text={"投资组合"}
                white={true}
                url={"/comprehensive/investment/marketstock"}
              />
            </div>
          </div>

          <Carousel />

          <div className="productMaterial homeMaterials">
            <h4 className="title">
              产品素材
            </h4>
            <div className="links">
              <LinkIcon img={team_qsyx} text={"强势优选组"} url={"product/team_qsyx/duanxianbao/marketing/product"}/>
              <LinkIcon img={team_nytz} text={"牛眼投资组"} url={"product/team_nytz/duanxianbao/marketing/product"}/>
              <LinkIcon img={team_qsxg} text={"选股器"} url={"product/team_qsxg/duanxianbao/marketing/product"}/>
              <LinkIcon img={team_dllh} text={"独立量化组"} url={"product/team_dllh/duanxianbao/marketing/product"}/>
            </div>
          </div>
        </div>

        <div className="blank-height-30" />

        <div className="videosAndMessages">
          <div className="featuredVideos">
            <h4 className="title">
              精选视频
            </h4>

            <FeaturedVideos />
          </div>

          <div className="leavingMessage">
            <h4 className="title">
              留言
            </h4>
            <ChatBox />
          </div>
        </div>

        <div className="blank-height-30" />

        <Footer />
      </div>
    )
  }
}

export default Home
