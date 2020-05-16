import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects'
import { createPaymentUrl, withdrawnApi } from './api'
import { paymentAction } from '.'
function* paymentSaga(actions) {
  try {
    const response = yield call(
      createPaymentUrl,
      actions.payload,
    )
    window.location.replace(response.data.url)
    yield call(getBankSaga)
  } catch (e) {
    console.log(e)
  }
}
function* withdrawnSaga(actions) {
  try {
    yield call(withdrawnApi, actions.payload)
    window.location.replace('/user/payment-success')
    yield put(paymentAction.withdrawnSuccess())
  } catch (e) {
    console.log(e)
    yield put(paymentAction.withdrawnSuccess())
  }
}

export default function*() {
  yield all([
    takeLatest('PAYMENT', paymentSaga),
    takeLatest('WITHDRAWN', withdrawnSaga),
  ])
}
