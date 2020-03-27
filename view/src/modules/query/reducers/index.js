import { combineReducers } from 'redux-immutable'
import queryReducer from './query'
export default combineReducers({
  query: queryReducer
})