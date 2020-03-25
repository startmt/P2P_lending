import { combineReducers } from 'redux-immutable'
import initRequestList from './initRequestList'
import initRequestData from './initRequestData'
export default combineReducers({
  adminInitRequest: initRequestList,
  adminInitRequestData: initRequestData,
})
