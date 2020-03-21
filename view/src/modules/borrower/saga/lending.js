import {
  call,
  put,
  all,
  takeEvery,
} from 'redux-saga/effects'
import { getMyLendingListApi } from '../api/lending'
import { lendingAction } from '../actions'
import Router from 'next/router'

function* getMyLendingList(action) {
  try {
    const { data } = yield call(getMyLendingListApi)
    yield put(lendingAction.getSelfLendingSuccess({ data }))
  } catch (e) {
    console.log(e)
    yield put(
      lendingAction.getSelfLendingFail(
        e.response.data.message,
      ),
    )
  }
}

export default function*() {
  yield all([
    takeEvery('INIT_MY_LENDING_LIST', getMyLendingList),
  ])
}
