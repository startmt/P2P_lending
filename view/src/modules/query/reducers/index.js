import { combineReducers } from 'redux-immutable'
import queryReducer from './query'
import interestReducer from './interest'
export default combineReducers({
  query: queryReducer,
  interest: interestReducer,
})
