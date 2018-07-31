import React from 'react';
import {Route, HashRouter as Router, Switch} from 'react-router-dom';

import {Alert} from 'components/Alert';
import SiderMenu from 'components/SiderMenu/SiderMenu';
import SiderFeaturedVideos from 'components/SiderFeaturedVideo/SiderFeaturedVideos';

/*首页*/
import {Home} from './routes/Home';

/*营销素材-产品案例*/
import {
  List as ProductMaterialMarketingProductList
} from './routes/MarketingMaterialProduct';

/*营销素材-战绩回顾*/
import {
  List as ProductMaterialMarketingRecordList
} from './routes/MarketingMaterialRecord';

/*策略素材*/
import {
  StrategyMaterial
} from './routes/StrategyMaterial';

/*策略素材-早评*/
import {
  List as StrategyMaterialPredictionList
} from './routes/StrategyMaterialPrediction';

/*策略素材-收评*/
import {
  List as StrategyMaterialReviewList
} from './routes/StrategyMaterialReview';

/*策略素材-盘中解盘评*/
import {
  List as StrategyMaterialAnalysisList
} from './routes/StrategyMaterialAnalysis';

/*体验素材-周报*/
import {
  List as ExperienceMaterialWeekList
} from './routes/ExperienceMaterialWeek';

/*体验素材-年报*/
import {
  List as ExperienceMaterialYearList,
  Detail as ExperienceMaterialYearDetail,
} from './routes/ExperienceMaterialYear';

/*客服素材-持仓分析*/
import {
  List as CustomerServiceAnalysisList
} from './routes/CustomerServiceAnalysis';

/*客服素材-服务视频*/
import {
  List as CustomerServiceVideoList,
} from './routes/CustomerServiceVideo';

import {NotFound} from './routes/NotFound';

/*研究素材*/
import {
  Research
} from './routes/ResearchMaterial';

/*视频回播*/
import {
  List as VideoReplayList,
} from './routes/VideoReplay';



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
  return (
    <div className="productMaterialsLayout">
      <SiderMenu match={match} menus={productMenus} title={"产品素材"}/>

      <div className="productMaterialsContent">
        <Route exact path={`${match.path}/marketing/product`} component={ProductMaterialMarketingProductList}/>

        <Route exact path={`${match.path}/marketing/record`} component={ProductMaterialMarketingRecordList}/>


        <Route exact path={`${match.path}/strategy`} component={StrategyMaterial}/>
        <Route exact path={`${match.path}/strategy/prediction`} component={StrategyMaterialPredictionList}/>

        <Route exact path={`${match.path}/strategy/review`} component={StrategyMaterialReviewList}/>

        <Route exact path={`${match.path}/strategy/analysis`} component={StrategyMaterialAnalysisList}/>


        <Route exact path={`${match.path}/experience/week`} component={ExperienceMaterialWeekList}/>

        <Route exact path={`${match.path}/experience/year`} component={ExperienceMaterialYearList}/>
        <Route exact path={`${match.path}/experience/year/detail/:id`} component={ExperienceMaterialYearDetail}/>


        <Route exact path={`${match.path}/customer/video`} component={CustomerServiceVideoList}/>

        <Route exact path={`${match.path}/customer/analysis`} component={CustomerServiceAnalysisList}/>


        <Route exact path={`${match.path}/research`} component={Research}/>


        <Route path={`${match.path}/replay`} component={VideoReplayList}/>
      </div>

      <div className="siderRecommend">
        <SiderFeaturedVideos match={match}/>
      </div>
    </div>
  )
}
import {MyRoute as Comprehensive} from 'routes/Comprehensive'; // 综合素材


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

              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>)
  }
}

export default App;
