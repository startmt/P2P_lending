import { combineReducers } from 'redux-immutable'
import authReducer from '~/modules/authentication/reducers'
import queryReducer from '~/modules/query/reducers'
import lendingReducer from '~/modules/borrower/reducers'
import admin from '~/modules/admin/reducers'
import { paymentReducer } from './modules/payment'
import { transactionReducer } from './modules/transaction'
import { contractReducer } from './modules/contract'
export default combineReducers({
  authentication: authReducer,
  page: queryReducer,
  lending: lendingReducer,
  admin,
  contract: contractReducer,
  transaction: transactionReducer,
  paymentReducer,
})
