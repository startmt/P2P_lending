import {
  call,
  put,
  all,
  takeEvery,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects'
import {
  getMyLendingListApi,
  getLendingList,
  getLendingDataApi,
} from '../api/lending'
import { lendingAction } from '../actions'

function* getMyLendingList() {
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

function* getLendingListSaga() {
  try {
    const { data } = yield call(getLendingList)
    yield put(lendingAction.getLendingSuccess({ data }))
  } catch (e) {
    console.log(e)
    yield put(lendingAction.getLendingListFail())
  }
}

function* getLendingDataSaga(action) {
  try {
    const { data } = yield call(
      getLendingDataApi,
      action.payload.id,
    )
    console.log(data)
    yield put(lendingAction.getLendingDataSuccess({ data }))
  } catch (e) {
    console.log(e)
    yield put(lendingAction.getLendingDataFail())
  }
}

export default function*() {
  yield all([
    takeEvery('INIT_MY_LENDING_LIST', getMyLendingList),
    takeEvery('GET_CHECK_LENDING_LIST', getLendingListSaga),
    takeLeading('GET_LENDING_DATA', getLendingDataSaga),
  ])
}
