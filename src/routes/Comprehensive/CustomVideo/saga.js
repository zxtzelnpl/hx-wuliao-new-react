import * as actionTypes from './actionTypes';
import { call ,put, takeLatest,select} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';
import nameSpace from "./nameSpace";

const getState = state => state[nameSpace];

function* init(){

  try{
    const data = {};
    const {total} = yield call(service.getTotal);
    data.total = total;
    if(total !== 0){
      const {pageSize,sort} = yield select(getState);
      const params = {
        from:0,
        to:pageSize,
        sort:sort
      }
      const page = yield call(service.getPage,params);
      data.list = page.list;
    }

    data.receivedAt = moment().unix();
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
  try{
    const {currentPage} = action;
    const {pageSize,sort} = yield select(getState);
    const params = {
      from:pageSize*(currentPage-1),
      to:pageSize*(currentPage),
      sort:sort
    }
    const page = yield call(service.getPage,params);
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
