import { combineReducers } from 'redux-immutable'
import lendingReducer from './lending'
import lendingCheckReducer from './checked-lending'
import bankReducer from './bank'
export default combineReducers({
  mylending: lendingReducer,
  lending: lendingCheckReducer,
  bank: bankReducer,
})
