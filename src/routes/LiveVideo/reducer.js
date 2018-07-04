import * as actionTypes from './actionTypes'
const initialState = {

}

const reducer = (state=initialState,action) =>{
  switch (action.type){
    case actionTypes.REQUEST:
      return {
        ...state,
        isFetching:true,
        error:null
      }
    case actionTypes.RECEIVED:
      return {
        ...state,
        data:action.data,
        isFetching:false
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
