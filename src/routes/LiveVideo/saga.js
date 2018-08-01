import * as actionTypes from './actionTypes';
import { call ,put, takeEvery, select} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';

const getState = state => state.LiveVideo;

function* intMessage(action){
  try{
    let data;

    const response = yield call(service.getMessages,action.params)

    if(Array.isArray(response.list.data_list)){
      data = {
        list:response.list.data_list,
        score:response.list.score,
        receivedAt:moment().unix()
      }
    }
    else{
      data = {
        score:action.params.score,
        receivedAt:moment().unix()
      }
    }

    yield put({
      type:actionTypes.RECEIVED,
      data:data
    })
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    })
  }
}

function* getMessage(){
  let data;
  const STATE = yield select(getState);
  const params = {
    score:STATE.score
  };

  const response = yield call(service.getMessages,params)
  if(response.list&&Array.isArray(response.list.data_list)){
    const list =yield select(state=>state.LiveVideo.list);
    data = {
      list:[].concat(list,response.list.data_list),
      score:response.list.score,
      receivedAt:moment().unix()
    }
  }
  else{
    data = {
      receivedAt:moment().unix()
    }
  }

  yield put({
    type:actionTypes.RECEIVED,
    data:data
  })
}

function* sendMessage(action){

  try{
    const user =yield select(state=>state.user)
    const {id,userName} = user;
    if(id){
      action.params.id = id;
      const response = yield call(service.sendMessages,action.params)
      let list =yield select(state=>state.LiveVideo.list);
      let data = {
        list:[...list,{
          name:userName,
          content:action.params.content,
          time:moment().format('YYYY-MM-DD hh:mm')
        }]
      }

      if(response.status===1){
        yield put({
          type:actionTypes.ADD_SUCCESS,
          data:data,
          receivedAt:moment().unix()
        })
      }
      else{
        throw new Error(response.msg);
      }


    }
    else{
      throw new Error('没有登录')
    }
  }
  catch(error){
    yield put({
      type:actionTypes.ERROR,
      error
    })
  }
}


export default function* rootFetch() {
  yield takeEvery(actionTypes.INIT,intMessage);
  yield takeEvery(actionTypes.REQUEST,getMessage);
  yield takeEvery(actionTypes.ADD,sendMessage)
}
