import * as actionTypes from './actionTypes'
const initialState = {
  currentPage:1,
  pageSize:9
}

const reducer = (state=initialState,action) =>{
  switch (action.type){
    case actionTypes.INIT:
      return {
        ...state,
        isFetching:true,
        error:null,
        ...action.urlParams
      }
    case actionTypes.REQUEST:
      return {
        ...state,
        isFetching:true,
        error:null
      }
    case actionTypes.RECEIVED:
      return {
        ...state,
        isFetching:false,
        ...action.data
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
