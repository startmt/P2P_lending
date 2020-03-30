import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects'
import { bankAction } from '../actions'
import { getBank } from '../api/bank'

function* getBankSaga() {
  try {
    const { data } = yield call(getBank)
    yield put(bankAction.getBankSuccess({ data }))
  } catch (e) {
    console.log(e)
    yield put(bankAction.getBankFail())
  }
}

export default function*() {
  yield all([takeLatest('LOADING_BANK', getBankSaga)])
}
