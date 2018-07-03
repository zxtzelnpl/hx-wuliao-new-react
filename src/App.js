import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Route, Redirect, HashRouter as Router, Switch} from 'react-router-dom';
import rootSaga from './sagas';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import SiderMenu from 'components/SiderMenu/SiderMenu';
import SiderFeaturedVideos from 'components/SiderFeaturedVideo/SiderFeaturedVideos';

import {Home} from './routes/Home';
import {
  ProductList as ProductMaterialMarketingProductList,
  ProductDetail as ProductMaterialMarketingProductDetail
} from './routes/MarketingMaterial';
import {
  StrategyMaterial
} from './routes/StrategyMaterial';

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

/*投资组合-营销票*/
import {
  MarketStock
} from './routes/MarketStock';

/*投资组合-服务票*/
import {
  ServiceStock
} from './routes/ServiceStock';

// import {Test} from './routes/Test';
import {Header} from './components/Header'
import Banner from './components/Banner/Banner'

const store = configureStore();
store.runSaga(rootSaga);

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
        <Route exact path={`${match.path}`} component={ProductMaterialMarketingProductList}/>
        <Route exact path={`${match.path}/marketing/product`} component={ProductMaterialMarketingProductList}/>
        <Route path={`${match.path}/marketing/product/list`} component={ProductMaterialMarketingProductList}/>
        <Route path={`${match.path}/marketing/product/detail`} component={ProductMaterialMarketingProductDetail}/>

        <Route path={`${match.path}/marketing/record/list`} component={ProductMaterialMarketingProductDetail}/>
        <Route path={`${match.path}/marketing/record/detail`} component={ProductMaterialMarketingProductDetail}/>


        <Route exact path={`${match.path}/strategy`} component={StrategyMaterial}/>
        <Route path={`${match.path}/strategy/prediction/list`} component={NotFound}/>

        <Route path={`${match.path}/strategy/review/list`} component={NotFound}/>

        <Route path={`${match.path}/strategy/analysis/list`} component={NotFound}/>


        <Route path={`${match.path}/experience/week/list`} component={NotFound}/>

        <Route path={`${match.path}/experience/year/list`} component={NotFound}/>


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

    <Route path={`${match.url}/investment/marketstock`} component={MarketStock}/>
    <Route path={`${match.url}/investment/servicestock`} component={ServiceStock}/>
  </div>
)


class App extends React.Component {
  render() {
    return <Provider store={store}>
      <ConnectedRouter
        history={store.history}
      >
        <Router>
          <div>
            <Header/>
            <Banner/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/product/:team/:child" component={Product}/>
              <Route path="/comprehensive" component={Comprehensive}/>

              <Route path="/live" component={NotFound}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </ConnectedRouter>
    </Provider>
  }
}

export default App;
