import {
  takeLatest,
  call,
  put,
  all,
} from 'redux-saga/effects'
import {
  getInitRequestList,
  getInitRequestData,
} from '../api/admin'
import { adminAction } from '../actions'

function* getinitRequest() {
  try {
    const data = yield call(getInitRequestList)
    yield put(adminAction.getInitRequestSuccess(data.data))
  } catch (e) {
    yield put(
      adminAction.getInitRequestFail(
        e.response.data.message,
      ),
    )
  }
}

function* getinitRequestDataSaga(actions) {
  try {
    const data = yield call(
      getInitRequestData,
      actions.payload.id,
    )
    yield put(
      adminAction.getInitRequestDataSuccess(data.data),
    )
  } catch (e) {
    yield put(
      adminAction.getInitRequestDataFail(
        e.response.data.message,
      ),
    )
  }
}

export default function*() {
  yield all([
    takeLatest('GET_INIT_REQUEST', getinitRequest),
    takeLatest(
      'GET_INIT_REQUEST_DATA',
      getinitRequestDataSaga,
    ),
  ])
}
