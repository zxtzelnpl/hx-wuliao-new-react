import * as actionTypes from './actionTypes';
import { call ,put, takeEvery} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';

function* getMessage(action){

  const messages = yield call(service.getMessages,action.params)

  yield put({
    type:actionTypes.RECEIVED,
    data:messages
  })
}

function* addMessage(action){
  const response = yield call(service.addMessages,action.params)

  console.log(response)

  yield put({
    type:actionTypes.ADD_SUCCESS,
    data:response
  })
}


export default function* rootFetch() {
  yield takeEvery(actionTypes.INIT,getMessage);
  yield takeEvery(actionTypes.REQUEST,getMessage);
  yield takeEvery(actionTypes.ADD,addMessage)
}
