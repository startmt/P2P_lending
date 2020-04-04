import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects'
import {
  getCurrentTenorFromWeb3,
  getBorrower,
  getId,
} from './api'
import { mapContractListToObject } from '../../contract/Lending'
import { contractAction } from './index'
// import Router from 'next/router'
function* contractTenorSaga(actions) {
  try {
    const data = yield call(
      getCurrentTenorFromWeb3,
      actions.payload.address,
    )
    const id = yield call(getId, actions.payload.address)
    const borrower = yield call(
      getBorrower,
      actions.payload.address,
    )

    const lendingObj = mapContractListToObject(data)
    const mutated = {
      id,
      ...lendingObj,
      borrower,
    }
    yield put(
      contractAction.getCurrentContractSuccess(mutated),
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
