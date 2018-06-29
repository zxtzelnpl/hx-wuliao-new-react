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


const Product = ({match})=>{
  console.log(match)
  return (
  <div className="productMaterialsLayout">
    <SiderMenu />

    <div className="productMaterialsContent">
      <Route path={`${match.path}`} component={ProductMaterialMarketingProductList} />
      <Route path={`${match.path}/marketing/product/list`} component={ProductMaterialMarketingProductList} />
      <Route path={`${match.path}/marketing/product/detail`} component={ProductMaterialMarketingProductDetail} />

      <Route path={`${match.path}/marketing/record/list`} component={ProductMaterialMarketingProductDetail} />
      <Route path={`${match.path}/marketing/record/detail`} component={ProductMaterialMarketingProductDetail} />


      <Route path={`${match.path}/strategy/prediction/list`} component={NotFound} />

      <Route path={`${match.path}/strategy/review/list`} component={NotFound} />

      <Route path={`${match.path}/strategy/analysis/list`} component={NotFound} />


      <Route path={`${match.path}/experience/week/list`} component={NotFound} />

      <Route path={`${match.path}/experience/year/list`} component={NotFound} />


      <Route path={`${match.path}/customer/analysis/list`} component={NotFound} />

      <Route path={`${match.path}/customer/video/list`} component={NotFound} />


      <Route path={`${match.path}/research`} component={NotFound} />


      <Route path={`${match.path}/replay`} component={NotFound} />
    </div>

    <div className="siderRecommend">
      <SiderFeaturedVideos />
    </div>
  </div>
)}

const Comprehensive = ({match})=>(
  <div className="comprehensiveMaterialsLayout">

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
              <Route path="/product/:team/:child" component={Product}/>
              <Route path="/comprehensive" component={Comprehensive}/>

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
