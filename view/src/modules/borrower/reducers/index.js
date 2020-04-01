import { combineReducers } from 'redux-immutable'
import lendingReducer from './lending'
import lendingCheckReducer from './checked-lending'
export default combineReducers({
  mylending: lendingReducer,
  lending: lendingCheckReducer,
})
