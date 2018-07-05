import * as actionTypes from './actionTypes';
import { call ,put, take, takeEvery, select, fork, cancel, cancelled} from 'redux-saga/effects';
import * as service from './service';
import myStorage from 'utils/myStorage';


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
    delete data.type;
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

function* addLocal(action){
  myStorage.setItem('userName',action.data.userName);
}

function* removeLocal(){
  myStorage.removeItem('userName');
}

export default function* rootFetch() {
  yield takeEvery(actionTypes.REQUEST_CODE,getCode);
  yield takeEvery(actionTypes.REQUEST,login);
  yield takeEvery(actionTypes.RECEIVED,addLocal);
  yield takeEvery(actionTypes.LOGOUT,removeLocal);
}

