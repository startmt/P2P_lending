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
import { openNotificationWithIcon } from '../../../components/Notification/Notification'
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
    const data = yield call(
      confirmInitRequest,
      actions.payload.id,
      actions.payload.state,
    )

    yield put(adminAction.confirmRequestSuccess(data.data))
    yield getinitRequest()
    yield put(adminAction.closeInitRequestModal())
    yield call(
      openNotificationWithIcon,
      'success',
      'สำเร็จ',
    )
  } catch (e) {
    console.log(e)

    yield call(
      openNotificationWithIcon,
      'error',
      'มีบางอย่างผิดพลาด',
    )
    yield put(adminAction.confirmRequestFail('Error'))
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
