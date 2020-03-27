import { combineReducers } from 'redux-immutable'
import lendingReducer from './lending'
export default combineReducers({
  mylending: lendingReducer,
})
