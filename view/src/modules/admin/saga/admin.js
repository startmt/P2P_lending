import {
  takeLatest,
  call,
  put,
  all,
} from 'redux-saga/effects'
import { getInitRequestList } from '../api/admin'
import { adminAction } from '../actions'

function* getinitRequest() {
  try {
    const data = yield call(getInitRequestList)
    yield put(adminAction.getInitRequestSuccess(data.data))
  } catch (e) {
    yield put(
      registerAction.registerFail(e.response.data.message),
    )
  }
}

export default function*() {
  yield all([
    takeLatest('GET_INIT_REQUEST', getinitRequest),
  ])
}
