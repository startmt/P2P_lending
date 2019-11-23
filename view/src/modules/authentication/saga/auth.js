import {
  takeLatest,
  call,
  put,
  all,
} from 'redux-saga/effects'
import { register } from '../api/auth'
import { registerAction } from '../actions'
import Router from 'next/router'

function* registerSaga(action) {
  try {
    const { username, password, role } = action.payload
    yield call(register, username, password, role)
    yield put(registerAction.registerSuccess())
    Router.push({
      pathname: '/login',
    })
  } catch (e) {
    yield put(
      registerAction.registerFail(e.response.data.message),
    )
  }
}

export default function*() {
  yield all([takeLatest('REGISTER', registerSaga)])
}
