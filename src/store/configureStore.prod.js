import { createBrowserHistory } from 'history';
import {createStore, applyMiddleware, compose} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware  from 'redux-saga';
import rootReducer from '../reducer';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const history = createBrowserHistory();
  const middleware = [
    routerMiddleware(history),
    sagaMiddleware
  ];

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(...middleware))
  );

  store.runSaga = sagaMiddleware.run
  store.history = history;
  return store;
}
