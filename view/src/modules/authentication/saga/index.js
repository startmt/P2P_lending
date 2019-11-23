import { call } from 'redux-saga/effects'
import authSaga from './auth'
export default [call(authSaga)]
