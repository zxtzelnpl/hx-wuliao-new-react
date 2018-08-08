import * as actionTypes from './actionTypes';
import {getCookie} from "utils/myCookie";
import myStorage from "utils/myStorage";


let initialState = {}
const TICKET = getCookie('ticket');
if(TICKET&&myStorage.getItem('user')){
  initialState=JSON.parse(myStorage.getItem('user'));
}

const reducer = (state=initialState,action) =>{
  switch (action.type){
    case actionTypes.REQUEST_CODE:
      return {
        ...state,
        isFetching:'code',
        error:null
      }
    case actionTypes.RECEIVED_CODE:
      return {
        ...state,
        code:action.data.codeImg,
        isFetching:false
      }
    case actionTypes.REQUEST:
      return {
        ...state,
        isFetching:'login',
        error:null
      }
    case actionTypes.RECEIVED:
      return {
        ...state,
        ...action.data,
        isFetching:false
      }
    case actionTypes.LOGOUT:
      return {

      }
    case actionTypes.ERROR:
      return {
        ...state,
        isFetching:false,
        error:action.error
      }
    default:
      return state
  }
}

export default reducer
