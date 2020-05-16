export * as contractAction from './action'
import { combineReducers } from 'redux-immutable'
import contractReduce from './reducer'
import contract from './saga'
import { call } from 'redux-saga/effects'
export const contractReducer = combineReducers({
  contract: contractReduce,
})

export const contractSaga = [call(contract)]
