import { call } from 'redux-saga/effects'
import interestSaga from './interest'
export default [call(interestSaga)]
