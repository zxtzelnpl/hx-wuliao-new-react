import * as actionTypes from './actionTypes'
const initialState = {
  currentPage:1,
  pageSize:20,
  sort:'DESC',
}

const reducer = (state=initialState,action) =>{
  switch (action.type){
    case actionTypes.TOTAL:
      return {
        ...state,
        isFetchingTotal:true,
        error:null,
      }
    case actionTypes.TOTAL_RECEIVED:
      return {
        ...state,
        ...action.data,
        isFetchingTotal:false,
        error:null,
      }
    case actionTypes.INIT:
      return {
        ...state,
        isFetching:true,
        error:null,
      }

    case actionTypes.REQUEST:
      return {
        ...state,
        isFetching:true,
        error:null,
      }
    case actionTypes.RECEIVED:
      return {
        ...state,
        isFetching:false,
        ...action.data,
      }
    case actionTypes.ERROR:
      return {
        ...state,
        isFetching:false,
        error:action.error,
      }
    default:
      return state
  }
}

export default reducer
