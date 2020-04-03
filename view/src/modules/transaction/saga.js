import {
  call,
  all,
  takeLatest,
  put,
} from 'redux-saga/effects'
import { loadingTransactionApi } from './api'
import { loadingSuccess } from './action'
import Router from 'next/router'
function* loadingSaga(actions) {
  try {
    const response = yield call(loadingTransactionApi)
    if (response.data.loading === false)
      yield put(loadingSuccess())
  } catch (e) {
    console.log(e)
    Router.push('/')
  }
}

export default function*() {
  yield all([
    takeLatest('LOADING_TRANSACTION_LOADING', loadingSaga),
  ])
}
