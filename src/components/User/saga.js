import * as actionTypes from './actionTypes';
import { call ,put, take, takeEvery, select, fork, cancel, cancelled} from 'redux-saga/effects';
import * as service from './service';

function* getCode() {
  try{
    const response = yield call(service.getCode);

    yield put({
      type:actionTypes.RECEIVED_CODE,
      data:response
    });
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
}

function* login(data){
  try{
    const response = yield call(service.login,data);

    yield put({
      type:actionTypes.RECEIVED,
      data:response
    });
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
}

export default function* rootFetch() {
  yield takeEvery(actionTypes.REQUEST_CODE,getCode);
  yield takeEvery(actionTypes.REQUEST,login);
}

