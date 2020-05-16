export * as createLendingAction from './action'
import { combineReducers } from 'redux-immutable'
import createLendingReduce from './reducer'
import createLending from './saga'
import { call } from 'redux-saga/effects'
export const eventReducer = combineReducers({
  createLending: createLendingReduce,
})

export const createLendingSaga = [call(createLending)]
