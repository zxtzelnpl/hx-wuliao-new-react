import * as actionTypes from './actionTypes';
import { call ,put, takeLatest,select} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';
import myStorage from 'utils/myStorage';
import {getBeforeTotal} from 'utils/tools';
import nameSpace from './nameSpace';

const getState = state => state[nameSpace];

function* init(){
  try{
    const STATE = yield select(getState);
    const {pageSize,currentPage,condition,sort,order} = STATE;
    let {total} = STATE;

    let from = (currentPage-1)*pageSize;
    let to = currentPage*pageSize;
    const params = {
      from:from,
      to:to,
      sort:sort,
      order:order,
      condition:condition
    }

    if(!total){
      let response = yield call(service.getTotal,params);
      total = response.total;
    }

    const page = yield call(service.getPage,params);

    const rise1 = yield call(service.getPage,{...params,to:1,order:'rise1'})
    const rise3 = yield call(service.getPage,{...params,to:1,order:'rise3'})
    const rise5 = yield call(service.getPage,{...params,to:1,order:'rise5'})
    const over_per = yield call(service.getPage,{...params,to:1,order:'over_per'})

    const data = {
      list:page.list,
      total:total,
      rise1:rise1.list,
      rise3:rise3.list,
      rise5:rise5.list,
      over_per:over_per.list,
      receivedAt:moment().unix()
    }

    /*将浏览记录改变*/
    myStorage.setItem(nameSpace,total);
    data.beforeTotal = total;

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

function* getTotal(){
  try{
    const {total} = yield call(service.getTotal);
    const beforeTotal = getBeforeTotal(nameSpace);
    yield put({
      type:actionTypes.RECEIVED,
      data:{
        total,
        beforeTotal,
      }
    })
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error,
    });
  }
}

function* conditions(action){
  try{
    const STATE = yield select(getState);
    const {pageSize,sort,order} = STATE;

    const params = {
      from:0,
      to: pageSize,
      sort:sort,
      order:order,
      condition:action.condition
    }

    const page = yield call(service.getPage,params)
    const total = yield call(service.getTotal,params)

    const data = {
      list:page.list,
      total:total.total,
      condition:action.condition,
      currentPage:1,
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

function* changePage(action){
  try{
    const {currentPage} = action;
    const STATE = yield select(getState);
    const {pageSize,condition,sort,order} = STATE;
    let from = (currentPage-1)*pageSize;
    let to = currentPage*pageSize;
    const params = {
      from:from,
      to:to,
      sort:sort,
      order:order,
      condition:condition
    }

    const page = yield call(service.getPage,params)

    const data = {
      list:page.list,
      currentPage:currentPage,
      receivedAt:moment().unix(),
      condition:condition
    }

    yield put({
      type:actionTypes.RECEIVED,
      data
    })
  }
  catch(error){
    console.log(error.response.text().then(text=>{console.log(text)}))
    yield put({
      type:actionTypes.ERROR,
      error
    });
  }
}

function* order(action){
  try{
    const {sort,order} = action;
    const STATE = yield select(getState);
    const {pageSize,currentPage,condition} = STATE;

    let from = (currentPage-1)*pageSize;
    let to = currentPage*pageSize;
    const params = {
      from:from,
      to:to,
      sort:sort,
      condition:condition,
      order:order
    }

    const page = yield call(service.getPage,params)

    const data = {
      list:page.list,
      order:order,
      sort:sort,
      receivedAt:moment().unix(),
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
  yield takeLatest(actionTypes.TOTAL,getTotal);
  yield takeLatest(actionTypes.REQUEST,changePage);
  yield takeLatest(actionTypes.CONDITION,conditions);
  yield takeLatest(actionTypes.ORDER,order);
}
