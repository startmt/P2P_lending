import { call } from 'redux-saga/effects'
import lendingSaga from './lending'
import bankSaga from './bank'
export default [call(lendingSaga), call(bankSaga)]
