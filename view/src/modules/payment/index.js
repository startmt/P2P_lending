export * as paymentAction from './action'
import { combineReducers } from 'redux-immutable'
import paymentReduce from './reducer'
import payment from './saga'
import { call } from 'redux-saga/effects'
export const paymentReducer = combineReducers({
  payment: paymentReduce,
})

export const paymentSaga = [call(payment)]
