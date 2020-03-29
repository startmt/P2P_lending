import {
  takeLatest,
  call,
  put,
  all,
} from 'redux-saga/effects'
import { interestAction } from '../actions'
import {
  getInterestFromWeb3,
  setInterestToWeb3,
} from '../api/interest'
import { mapInterestToObject } from '../../../contract/interest'
import { openNotificationWithIcon } from '../../../components/Notification/Notification'
function* getInterestDataSaga() {
  try {
    const data = yield call(getInterestFromWeb3)
    const interestData = mapInterestToObject(data)
    yield put(
      interestAction.setInterestDataSuccess(interestData),
    )
  } catch (e) {
    console.log(e)
    yield put(interestAction.setInterestFail())
  }
}

function* setInterestDataSaga(actions) {
  try {
    const data = yield call(
      setInterestToWeb3,
      actions.payload,
    )
    console.log(data)
    yield put(
      interestAction.setInterestDataSuccess(
        actions.payload.interest,
        actions.payload.fee,
      ),
    )
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
    yield put(interestAction.setInterestFail())
  }
}

export default function*() {
  yield all([
    takeLatest('GET_INTEREST_DATA', getInterestDataSaga),
    takeLatest('SET_INTEREST_DATA', setInterestDataSaga),
  ])
}
