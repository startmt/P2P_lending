import { combineReducers } from 'redux-immutable'
import authReducer from '~/modules/authentication/reducers'
import queryReducer from '~/modules/query/reducers'
import lendingReducer from '~/modules/borrower/reducers'
import admin from '~/modules/admin/reducers'
export default combineReducers({
  authentication: authReducer,
  page: queryReducer,
  lending: lendingReducer,
  admin,
})
