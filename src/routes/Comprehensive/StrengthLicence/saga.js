import * as actionTypes from './actionTypes';
import { call ,put, takeLatest} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';

function* init(action){

  try{
    const page = yield call(service.getPage,action.params)
    const total = yield call(service.getTotal)

    const data = {
      list:page.list,
      total:total.total,
      receivedAt:moment().unix()
    }

    yield put({
      type:actionTypes.RECEIVED,
      data
    })
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
}

function* getPage(action){

  const {params,currentPage} = action;

  try{
    const page = yield call(service.getPage,params)

    const data = {
      list:page.list,
      currentPage:currentPage,
      receivedAt:moment().unix()
    }

    yield put({
      type:actionTypes.RECEIVED,
      data
    })
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
}



export default function* rootFetch() {
  yield takeLatest(actionTypes.INIT,init);
  yield takeLatest(actionTypes.REQUEST,getPage);
}
