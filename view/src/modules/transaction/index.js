export * as transactionAction from './action'
import { combineReducers } from 'redux-immutable'
import transactionReduce from './reducer'
import transaction from './saga'
import { call } from 'redux-saga/effects'
export const transactionReducer = combineReducers({
  transaction: transactionReduce,
})

export const transactionSaga = [call(transaction)]
