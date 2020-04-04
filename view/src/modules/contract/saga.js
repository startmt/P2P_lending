import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects'
import { getCurrentTenorFromWeb3 } from './api'
import { mapContractListToObject } from '../../contract/Lending'
import { contractAction } from './index'
// import Router from 'next/router'
function* contractTenorSaga(actions) {
  try {
    const data = yield call(
      getCurrentTenorFromWeb3,
      actions.payload.address,
    )
    const lendingObj = mapContractListToObject(data)
    yield put(
      contractAction.getCurrentContractSuccess(lendingObj),
    )
  } catch (e) {
    console.log(e)
  }
}

export default function*() {
  yield all([
    takeLatest(
      'GET_CURRENT_CONTRACT_TENOR',
      contractTenorSaga,
    ),
  ])
}
