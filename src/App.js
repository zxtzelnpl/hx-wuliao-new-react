import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import {Route,Redirect,HashRouter as Router,Switch} from 'react-router-dom';
import rootSaga from './sagas';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {Home} from './routes/Home';
import {NotFound} from './routes/NotFound';
// import {Test} from './routes/Test';

import {Header} from './components/Header'
import Banner from './components/Banner/Banner'

const store = configureStore();
store.runSaga(rootSaga);

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
