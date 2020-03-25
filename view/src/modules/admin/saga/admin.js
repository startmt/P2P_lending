import {
  takeLatest,
  call,
  put,
  all,
} from 'redux-saga/effects'
import {
  getInitRequestList,
  getInitRequestData,
  confirmInitRequest,
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
function* confirmRequestSaga(actions) {
  try {
    console.log(actions)
    const data = yield call(
      confirmInitRequest,
      actions.payload.id,
      actions.payload.state,
    )
    yield put(adminAction.confirmRequestSuccess(data.data))
    yield getinitRequest()
    yield put(adminAction.closeInitRequestModal())
  } catch (e) {
    yield put(
      adminAction.confirmRequestFail(
        e.response.data.message,
      ),
    )
    yield put(adminAction.closeInitRequestModal())
  }
}

export default function*() {
  yield all([
    takeLatest('GET_INIT_REQUEST', getinitRequest),
    takeLatest(
      'GET_INIT_REQUEST_DATA',
      getinitRequestDataSaga,
    ),
    takeLatest(
      'CONFIRM_INIT_REQUEST_DATA',
      confirmRequestSaga,
    ),
  ])
}
