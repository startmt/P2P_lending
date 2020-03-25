import { combineReducers } from 'redux-immutable'
import initRequestList from './initRequestList'
import initRequestData from './initRequestData'
import confirmRequest from './confirm'
export default combineReducers({
  adminInitRequest: initRequestList,
  adminInitRequestData: initRequestData,
  confirm: confirmRequest,
})
