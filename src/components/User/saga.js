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

function* login(action){
  try{
    delete action.type;
    const response = yield call(service.login,action);

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
  myStorage.setItem('user',JSON.stringify(action.data));
}

function* removeLocal(){
  myStorage.removeItem('user');
}

const checkError = action => {
  const {error,type} = action;
  if(type===actionTypes.ERROR){
    return false
  }
  if(error&&error.name===401){
    return true
  }
}

export default function* rootFetch() {
  yield takeEvery(actionTypes.REQUEST_CODE,getCode);
  yield takeEvery(actionTypes.REQUEST,login);
  yield takeEvery(actionTypes.RECEIVED,addLocal);
  yield takeEvery(actionTypes.LOGOUT,removeLocal);
  yield takeEvery(checkError,()=>{
    put(actionTypes.LOGOUT)
  });
}

