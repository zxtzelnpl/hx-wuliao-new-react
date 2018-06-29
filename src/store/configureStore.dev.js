import { createHashHistory } from 'history';
import {createStore, applyMiddleware, compose} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware  from 'redux-saga';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducer';



export default function configureStore(initialState) {
  let composeEnhancers = compose;
  // 触发 redux-devtools
  if (typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const sagaMiddleware = createSagaMiddleware();
  const history = createHashHistory();
  const middleware = [
    routerMiddleware(history),
    sagaMiddleware,
    createLogger()
  ];
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  store.runSaga = sagaMiddleware.run
  store.history = history;
  return store;

}
