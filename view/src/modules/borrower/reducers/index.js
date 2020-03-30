import { combineReducers } from 'redux-immutable'
import lendingReducer from './lending'
import bankReducer from './bank'
export default combineReducers({
  mylending: lendingReducer,
  bank: bankReducer,
})
