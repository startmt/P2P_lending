import { combineReducers } from 'redux-immutable'
import loginReducer from './login'
import registerReducer from './register'
export default combineReducers({
  login: loginReducer,
  register: registerReducer,
})
