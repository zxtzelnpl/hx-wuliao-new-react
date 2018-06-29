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
import {NotFound} from './routes/NotFound';
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
        path: 'abc'
      },
      {
        name: '战绩展示',
        path: 'abc'
      },
    ]
  },
  {
    title: '策略素材',
    lis: [
      {
        name: '早评',
        path: 'abc'
      },
      {
        name: '收评',
        path: 'abc'
      },
      {
        name: '盘中解盘',
        path: 'abc'
      },
    ]
  },
  {
    title: '体验素材',
    lis: [
      {
        name: '周报',
        path: 'abc'
      },
      {
        name: '年报',
        path: 'abc'
      },
    ]
  },
  {
    title: '客服素材',
    lis: [
      {
        name: '持仓分析',
        path: 'abc'
      },
      {
        name: '服务食品',
        path: 'abc'
      },
    ]
  },
  {
    title: '研究素材',
    path: 'abc'
  },
  {
    title: '视频回播',
    path: 'abc'
  },
]
const Product = ({match}) => {
  console.log(match)
  return (
    <div className="productMaterialsLayout">
      <SiderMenu menus={productMenus}/>

      <div className="productMaterialsContent">
        <Route path={`${match.path}`} component={ProductMaterialMarketingProductList}/>
        <Route path={`${match.path}/marketing/product/list`} component={ProductMaterialMarketingProductList}/>
        <Route path={`${match.path}/marketing/product/detail`} component={ProductMaterialMarketingProductDetail}/>

        <Route path={`${match.path}/marketing/record/list`} component={ProductMaterialMarketingProductDetail}/>
        <Route path={`${match.path}/marketing/record/detail`} component={ProductMaterialMarketingProductDetail}/>


        <Route path={`${match.path}/strategy/prediction/list`} component={NotFound}/>

        <Route path={`${match.path}/strategy/review/list`} component={NotFound}/>

        <Route path={`${match.path}/strategy/analysis/list`} component={NotFound}/>


        <Route path={`${match.path}/experience/week/list`} component={NotFound}/>

        <Route path={`${match.path}/experience/year/list`} component={NotFound}/>


        <Route path={`${match.path}/customer/analysis/list`} component={NotFound}/>

        <Route path={`${match.path}/customer/video/list`} component={NotFound}/>


        <Route path={`${match.path}/research`} component={NotFound}/>


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

  },
  {
    title:'投资组合',
    lis:[

    ]
  }
];
const Comprehensive = ({match}) => (
  <div className="comprehensiveMaterialsLayout">
    <SiderMenu menus={comprehensiveMenus}/>

    <div className="comprehensiveMaterialsContent">
      <Route path={`${match.url}/replay`} component={NotFound}/>
    </div>
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
