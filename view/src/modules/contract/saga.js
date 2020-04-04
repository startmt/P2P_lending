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
  getLender,
  getBorrowerDetail,
  getLenderContract,
  getLenderDetail,
  getState,
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
    const lender = yield call(
      getLender,
      actions.payload.address,
    )

    const borrowerDetail = yield call(
      getBorrowerDetail,
      actions.payload.address,
    )

    const lenderDetail = yield call(
      getLenderDetail,
      actions.payload.address,
    )
    const lenderContract = yield call(
      getLenderContract,
      actions.payload.address,
    )
    const state = yield call(
      getState,
      actions.payload.address,
    )

    const lendingObj = mapContractListToObject(data)
    const mutated = {
      id,
      ...lendingObj,
      borrower,
      lender,
      borrowerDetail,
      lenderDetail,
      lenderContract,
      state,
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
