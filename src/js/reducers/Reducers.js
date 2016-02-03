import { combineReducers } from 'redux'
import { INCREMENT_WEEKOFFSET, DECREMENT_WEEKOFFSET, RESET_WEEKOFFSET } from './../actions/Actions'


function weekOffset(state = 0 , action){

  switch(action.type){
    case INCREMENT_WEEKOFFSET :
      return state + 1
    case DECREMENT_WEEKOFFSET :
      return state - 1
    case RESET_WEEKOFFSET :
      return state = 0
    default:
      return state
  }

}

const Reducers =  combineReducers({weekOffset})



export default Reducers
