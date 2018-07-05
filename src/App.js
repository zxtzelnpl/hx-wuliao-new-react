import React from 'react';
import {Route, Redirect, HashRouter as Router, Switch} from 'react-router-dom';

import {Alert} from 'components/Alert';
import SiderMenu from 'components/SiderMenu/SiderMenu';
import SiderFeaturedVideos from 'components/SiderFeaturedVideo/SiderFeaturedVideos';
import {SiderChatBox} from 'components/SiderChatBox'

/*首页*/
import {Home} from './routes/Home';

/*营销素材-产品案例*/
import {
  List as ProductMaterialMarketingProductList,
  Detail as ProductMaterialMarketingProductDetail
} from './routes/MarketingMaterialProduct';

/*营销素材-战绩回顾*/
import {
  List as ProductMaterialMarketingRecordList,
  Detail as ProductMaterialMarketingRecordDetail
} from './routes/MarketingMaterialRecord';

/*策略素材*/
import {
  StrategyMaterial
} from './routes/StrategyMaterial';

/*策略素材-早评*/
import {
  List as StrategyMaterialPredictionList,
  Detail as StrategyMaterialPredictionDetail,
} from './routes/StrategyMaterialPrediction';

/*策略素材-收评*/
import {
  List as StrategyMaterialReviewList,
  Detail as StrategyMaterialReviewDetail,
} from './routes/StrategyMaterialReview';

/*策略素材-盘中解盘评*/
import {
  List as StrategyMaterialAnalysisList,
  Detail as StrategyMaterialAnalysisDetail,
} from './routes/StrategyMaterialAnalysis';

/*体验素材-周报*/
import {
  List as ExperienceMaterialWeekList,
  Detail as ExperienceMaterialWeekDetail,
} from './routes/ExperienceMaterialWeek';

/*体验素材-年报*/
import {
  List as ExperienceMaterialYearList,
  Detail as ExperienceMaterialYearDetail,
} from './routes/ExperienceMaterialYear';

/*客服素材*/
import {
  CustomerServiceVideo
} from './routes/CustomerServiceMaterial';

import {NotFound} from './routes/NotFound';

/*研究素材*/
import {
  Research,
  StockPoolDetail
} from './routes/ResearchMaterial';

/*营销素材-营销话术*/
import {
  SpeechCraft,
  SpeechCraftDetail
} from './routes/SpeechCraft';

/*投资组合-营销票*/
import {
  MarketStock
} from './routes/MarketStock';

/*投资组合-服务票*/
import {
  ServiceStock
} from './routes/ServiceStock';

/*直播视频*/
import {
  LiveVideo
} from './routes/LiveVideo';

import {Header} from './components/Header'
import Banner from './components/Banner/Banner'

const productMenus = [
  {
    title: '营销素材',
    lis: [
      {
        name: '产品案例',
        path: 'marketing/product'
      },
      {
        name: '战绩展示',
        path: 'marketing/record'
      },
    ]
  },
  {
    title: '策略素材',
    lis: [
      {
        name: '早评',
        path: 'strategy/prediction'
      },
      {
        name: '收评',
        path: 'strategy/review'
      },
      {
        name: '盘中解盘',
        path: 'strategy/analysis'
      },
    ]
  },
  {
    title: '体验素材',
    lis: [
      {
        name: '周报',
        path: 'experience/week'
      },
      {
        name: '年报',
        path: 'experience/year'
      },
    ]
  },
  {
    title: '客服素材',
    lis: [
      {
        name: '持仓分析',
        path: 'customer/analysis'
      },
      {
        name: '服务视频',
        path: 'customer/video'
      },
    ]
  },
  {
    title: '研究素材',
    path: 'research'
  },
  {
    title: '视频回播',
    path: 'replay'
  },
]
const Product = ({match}) => {
  console.log(match)
  return (
    <div className="productMaterialsLayout">
      <SiderMenu match={match} menus={productMenus}/>

      <div className="productMaterialsContent">
        <Route exact path={`${match.path}/marketing/product`} component={ProductMaterialMarketingProductList}/>
        <Route exact path={`${match.path}/marketing/product/detail/:id`} component={ProductMaterialMarketingProductDetail}/>

        <Route exact path={`${match.path}/marketing/record`} component={ProductMaterialMarketingRecordList}/>
        <Route exact path={`${match.path}/marketing/record/detail/:id`} component={ProductMaterialMarketingRecordDetail}/>


        <Route exact path={`${match.path}/strategy`} component={StrategyMaterial}/>
        <Route exact path={`${match.path}/strategy/prediction`} component={StrategyMaterialPredictionList}/>
        <Route exact path={`${match.path}/strategy/prediction/detail/:id`} component={StrategyMaterialPredictionDetail}/>

        <Route exact path={`${match.path}/strategy/review`} component={StrategyMaterialReviewList}/>
        <Route exact path={`${match.path}/strategy/review/detail/:id`} component={StrategyMaterialReviewDetail}/>

        <Route exact path={`${match.path}/strategy/analysis`} component={StrategyMaterialAnalysisList}/>
        <Route exact path={`${match.path}/strategy/analysis/detail/:id`} component={StrategyMaterialAnalysisDetail}/>


        <Route exact path={`${match.path}/experience/week`} component={ExperienceMaterialWeekList}/>
        <Route exact path={`${match.path}/experience/week/detail/:id`} component={ExperienceMaterialWeekDetail}/>

        <Route exact path={`${match.path}/experience/year`} component={ExperienceMaterialYearList}/>
        <Route exact path={`${match.path}/experience/year/detail/:id`} component={ExperienceMaterialYearDetail}/>


        <Route path={`${match.path}/customer/analysis/list`} component={NotFound}/>

        <Route exact path={`${match.path}/customer/video`} component={CustomerServiceVideo}/>


        <Route exact path={`${match.path}/research`} component={Research}/>
        <Route path={`${match.path}/research/:select/detail/:id`} component={StockPoolDetail}/>


        <Route path={`${match.path}/replay`} component={NotFound}/>
      </div>

      <div className="siderRecommend">
        <SiderFeaturedVideos/>
      </div>
    </div>
  )
}

const comprehensiveMenus = [
  {
    title:'营销素材',
    lis:[
      {
        name:'营销话术',
        path:'marketing/speechcraft'
      },
      {
        name:'营销软文',
        path:'marketing/article'
      },
      {
        name:'营销图片',
        path:'marketing/image'
      }
    ]
  },
  {
    title:'投资组合',
    lis:[
      {
        name:'营销票',
        path:'investment/marketstock'
      },
      {
        name:'服务票',
        path:'investment/servicestock'
      },
      {
        name:'文字策略',
        path:'investment/texttrategy'
      }
    ]
  }
];
const Comprehensive = ({match}) => (
  <div className="comprehensiveMaterialsLayout">
    <SiderMenu match={match} menus={comprehensiveMenus}/>

    <Route exact path={`${match.url}/marketing/speechcraft`} component={SpeechCraft}/>
    <Route path={`${match.url}/marketing/speechcraft/detail/:id`} component={SpeechCraftDetail}/>


    <Route path={`${match.url}/investment/marketstock`} component={MarketStock}/>
    <Route path={`${match.url}/investment/servicestock`} component={ServiceStock}/>

    {/*侧边聊天*/}
    <Route path={`${match.url}/marketing`} component={SiderChatBox}/>
    <Route path={`${match.url}/investment/texttrategy`} component={SiderChatBox}/>
  </div>
)


class App extends React.Component {
  render() {
    return (<Router>
          <div>
            <Alert />
            <Header/>
            <Banner/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/product/:team/:child" component={Product}/>
              <Route path="/comprehensive" component={Comprehensive}/>

              <Route path="/live" component={LiveVideo}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>)
  }
}

export default App;
