import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects'
import { bankAction } from '../actions'
import { getBank, addBank } from '../api/bank'

function* getBankSaga(actions) {
  try {
    const { data } = yield call(
      getBank,
      actions?.payload?.state || '',
    )
    if (data.length === 0)
      yield put(bankAction.getBankSuccess(data, true))
    else yield put(bankAction.getBankSuccess(data, false))
  } catch (e) {
    console.log(e)
    yield put(bankAction.getBankFail())
  }
}
function* addBankSaga(actions) {
  try {
    yield call(addBank, actions.payload.data)
    yield put(bankAction.addBankSuccess())
    yield call(getBankSaga)
    yield put(bankAction.closeAddBankModal())
  } catch (e) {
    console.log(e)
    yield put(bankAction.addBankFail())
    yield put(bankAction.closeAddBankModal())
  }
}

export default function*() {
  yield all([
    takeLatest('LOADING_BANK', getBankSaga),
    takeLatest('ADD_BANK', addBankSaga),
  ])
}
