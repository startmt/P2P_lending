import {
  call,
  all,
  takeLatest,
  put,
} from 'redux-saga/effects'
import { createLendingApi } from './api'
import { createLendingAction } from '.'
import { openNotificationWithIcon } from '../../components/Notification/Notification'
function* createLendingSaga(actions) {
  try {
    yield call(createLendingApi, actions.payload.data)
    yield put(createLendingAction.createLendingSuccess())
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
    yield put(createLendingAction.createLendingSuccess())
  }
}

export default function*() {
  yield all([
    takeLatest('CREATE_LENDING', createLendingSaga),
  ])
}
