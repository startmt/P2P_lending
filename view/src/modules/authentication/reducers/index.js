import { combineReducers } from 'redux-immutable'
import loginReducer from './login'
export default combineReducers({
  auth: loginReducer
})