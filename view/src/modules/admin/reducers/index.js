import { combineReducers } from 'redux-immutable'
import adminReducer from './admin'
export default combineReducers({
  adminInitRequest: adminReducer,
})
