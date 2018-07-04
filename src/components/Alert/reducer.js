import * as actionTypes from './actionTypes'
const initialState = []

let id = 0;

const reducer = (state=initialState,action) =>{
  switch (action.type){
    case actionTypes.SUCCESS:
      return [...state,
        {
          className:'alert-success',
          message:action.message,
          id:id++
        }
      ]
    case actionTypes.WARNING:
      return [...state,
        {
          className:'alert-warning',
          message:action.message,
          id:id++
        }
      ]
    case actionTypes.ERROR:
      return [...state,
        {
          className:'alert-error',
          message:action.message,
          id:id++
        }
      ]
    case actionTypes.INFO:
      return [...state,
        {
          className:'alert-info',
          message:action.message,
          id:id++
        }
      ]
    default:
      return state
  }
}

export default reducer
