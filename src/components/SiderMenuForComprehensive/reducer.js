import * as actionTypes from './actionTypes';
import myStorage from "utils/myStorage";
import nameSpace from './nameSpace';

let initialState = {
  total:{},
  beforeTotal:{}
};
let beforeTotal = myStorage.getItem(nameSpace);
if(beforeTotal){
  initialState.beforeTotal = JSON.parse(beforeTotal);
}

const reducer = (state=initialState,action) => {
  switch (action.type){
    case actionTypes.REQUEST:
      return state;
    case actionTypes.RECEIVED:
      return {
        ...state,
        total:{
          ...action.data,
        },
        receivedAt:action.receivedAt
      };
    case actionTypes.ERROR:
      return {
        ...state,
        error:action.error
      }
    case actionTypes.BEFORE:
      const {liNameSpace} = action;
      const {total,beforeTotal} = state;
      const newBeforeTotal = {
        ...beforeTotal,
        [liNameSpace]:total[liNameSpace]
      }
      return {
        ...state,
        beforeTotal:newBeforeTotal
      };
    default:
      return state;
  }
}

export default reducer;
