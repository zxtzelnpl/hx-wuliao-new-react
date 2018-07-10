import * as actionTypes from './actionTypes';
import { call ,put, takeLatest,select} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';

function* init(){

  try{
    const CRMVideo = yield select(state=>state.CRMVideo);
    const {currentPage,pageSize} = CRMVideo;
    const params = {
      from:(currentPage-1)*pageSize,
      to:currentPage*pageSize,
      sort:'DESC'
    }

    const total = yield call(service.getTotal)
    const page = yield call(service.getPage,params)

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
  try{
    const {currentPage} = action;
    const pageSize = yield select(state=>state.CRMVideo.pageSize);
    const params = {
      from:(currentPage-1)*pageSize,
      to:currentPage*pageSize,
      sort:'DESC'
    }
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
