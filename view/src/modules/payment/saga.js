import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects'
import { createPaymentUrl } from './api'
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

export default function*() {
  yield all([takeLatest('PAYMENT', paymentSaga)])
}
