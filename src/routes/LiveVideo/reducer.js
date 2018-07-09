import * as actionTypes from './actionTypes'
const initialState = {
  currentPage:1,
  pageSize:20,
  list:[]
}

const reducer = (state=initialState,action) =>{
  switch (action.type){
    case actionTypes.INIT:
      return {
        ...state,
        isFetching:true,
        error:null
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
    case actionTypes.ADD:
      return {
        ...state,
        isAdding:true,
        ...action.data
      }
    case actionTypes.ADD_SUCCESS:
      return {
        ...state,
        isAdding:false,
        ...action.data
      }
    case actionTypes.ERROR:
      return {
        ...state,
        isFetching:false,
        isAdding:false,
        error:action.error
      }
    default:
      return state
  }
}

export default reducer
