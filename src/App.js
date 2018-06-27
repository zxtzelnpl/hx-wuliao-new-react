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
  ProductList as MaterialMarketingProductList,
  ProductDetail as MaterialMarketingProductDetail
} from './routes/MarketingMaterial';
import {NotFound} from './routes/NotFound';
// import {Test} from './routes/Test';

import {Header} from './components/Header'
import Banner from './components/Banner/Banner'

const store = configureStore();
store.runSaga(rootSaga);


const Material = ({match})=>(
  <div className="materialsLayout">
    <SiderMenu />

    <div className="materialsContent">
      <Route path={`${match.url}/marketing/product/list`} component={MaterialMarketingProductList}/>
      <Route path={`${match.url}/marketing/product/detail`} component={MaterialMarketingProductDetail}/>
    </div>

    <div className="siderRecommend">
      <SiderFeaturedVideos />
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
              <Route path="/material" component={Material}/>
              {/*<Route path="/material/marketing/product/list" exact component={MaterialMarketingProductList}/>*/}
              {/*<Route path="/material/marketing/product/detail" exact component={MaterialMarketingProductDetail}/>*/}
              {/*<Route path="/test" exact component={Test}/>*/}
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </ConnectedRouter>
    </Provider>
  }
}

export default App;
