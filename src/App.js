import React from 'react';
import {Route, HashRouter as Router, Switch} from 'react-router-dom';
import {Authority,NotAuthority} from 'components/User';
import {Alert} from 'components/Alert';

/*首页*/
import {Home} from './routes/Home';
import {Header} from './components/Header';
import NotFound from 'components/NotFound';

import {MyRoute as Comprehensive} from 'routes/Comprehensive'; // 综合素材
import {MyRoute as Product} from 'routes/Product'; // 综合素材


class App extends React.Component {
  render() {
    return (<Router>
          <div>
            <Alert />
            <Header/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Authority path="/product/:team/:child" component={Product} notMatch={NotAuthority}/>
              <Authority path="/comprehensive" component={Comprehensive} notMatch={NotAuthority}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>)
  }
}

export default App;
