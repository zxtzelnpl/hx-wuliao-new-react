import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import {Route,Redirect,HashRouter as Router,Switch} from 'react-router-dom';
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


const Product = ({match})=>(
  <div className="productMaterialsLayout">
    <SiderMenu />

    <div className="productMaterialsContent">
      <Route path={`${match.url}/marketing/product/list`} component={ProductMaterialMarketingProductList}/>
      <Route path={`${match.url}/marketing/product/detail`} component={ProductMaterialMarketingProductDetail}/>

      <Route path={`${match.url}/marketing/record/list`} component={ProductMaterialMarketingProductDetail}/>
      <Route path={`${match.url}/marketing/record/detail`} component={ProductMaterialMarketingProductDetail}/>


      <Route path={`${match.url}/strategy/prediction/list`} component={NotFound}/>

      <Route path={`${match.url}/strategy/review/list`} component={NotFound}/>

      <Route path={`${match.url}/strategy/analysis/list`} component={NotFound}/>


      <Route path={`${match.url}/experience/week/list`} component={NotFound}/>

      <Route path={`${match.url}/experience/year/list`} component={NotFound}/>


      <Route path={`${match.url}/customer/analysis/list`} component={NotFound}/>

      <Route path={`${match.url}/customer/video/list`} component={NotFound}/>


      <Route path={`${match.url}/research`} component={NotFound}/>


      <Route path={`${match.url}/replay`} component={NotFound}/>
    </div>

    <div className="siderRecommend">
      <SiderFeaturedVideos />
    </div>
  </div>
)

const Comprehensive = ({match})=>(
  <div className="comprehensiveMaterialsLayout">
    <SiderMenu />

    <div className="comprehensiveMaterialsContent">
      <Route path={`${match.url}/replay`} component={NotFound}/>
    </div>
  </div>
)



class App extends React.Component{
  render(){
    return <Provider store={store}>
      <ConnectedRouter
        history={store.history}
      >
        <Router>
          <div>
            <Header />
            <Banner />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/product" component={Product}/>

              <Route path="/live" component={NotFound}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </ConnectedRouter>
    </Provider>
  }
}

export default App;
