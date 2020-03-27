import { combineReducers } from 'redux-immutable'
import loginReducer from './login'
import registerReducer from './register'
import authReducer from './auth'
export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  auth: authReducer,
})
