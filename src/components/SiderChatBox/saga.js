import * as actionTypes from './actionTypes';
import { call ,put, takeEvery, select} from 'redux-saga/effects';
import * as service from './service';
import moment from 'moment';

function checkHasMore(list,pageSize){
  return list.length>=pageSize;
}

function* intMessage(){
  let data;

  const SiderChatBox = yield select(state=>state.SiderChatBox);
  const {nextFrom,pageSize} = SiderChatBox;

  let params = {
    from:nextFrom,
    to:nextFrom+pageSize,
    sort:'ASC'
  }

  const messages = yield call(service.getMessages,params);

  data = {
    list:messages.list,
    nextFrom:messages.list.length,
    receivedAt:moment().unix(),
    hasMore:checkHasMore(messages.list,pageSize)
  }

  yield put({
    type:actionTypes.RECEIVED,
    data:data
  })
}

function* getMessage(){
  let data;

  const SiderChatBox = yield select(state=>state.SiderChatBox);
  const {nextFrom,pageSize,list} = SiderChatBox;

  let params = {
    from:nextFrom,
    to:nextFrom+pageSize,
    sort:'ASC'
  }

  const messages = yield call(service.getMessages,params);

  data = {
    list:[].concat(list,messages.list),
    nextFrom:nextFrom+messages.list.length,
    receivedAt:moment().unix(),
    hasMore:checkHasMore(messages.list,pageSize)
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
      const response = yield call(service.addMessages,action.params)
      let list =yield select(state=>state.SiderChatBox.list);
      let data = {
        list:[...list,{
          name:userName,
          content:action.params.content,
          time:moment().format('YYYY-MM-DD hh:mm')
        }]
      }

      if(response.insert_id){
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
