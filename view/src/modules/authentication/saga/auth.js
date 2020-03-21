import {
  takeLatest,
  call,
  put,
  all,
} from 'redux-saga/effects'
import {
  login,
  register,
  getUserFromContractApi,
} from '../api/auth'
import {
  registerAction,
  loginAction,
  authAction,
} from '../actions'
import Router from 'next/router'

function* registerSaga(action) {
  try {
    const { username, password, role } = action.payload
    yield call(register, username, password, role)
    yield put(registerAction.registerSuccess())
    Router.push({
      pathname: '/',
    })
  } catch (e) {
    yield put(
      registerAction.registerFail(e.response.data.message),
    )
  }
}

function* loginSaga(action) {
  try {
    const { username, password } = action.payload
    const res = yield call(login, username, password)

    localStorage.setItem('token', res.data.token)
    yield put(loginAction.loginSuccess())
    Router.push({
      pathname: '/',
    })
  } catch (e) {
    yield put(
      loginAction.loginFail(e.response.data.message),
    )
  }
}
function* setAuthen(action) {
  try {
    const blockUser =
      action.payload.authDesc.userDetail.blockData
    if (blockUser) {
      yield put(authAction.setUserFromContract())
      const res = yield call(
        getUserFromContractApi,
        blockUser,
      )
      console.log(res)
      const data = { state: res.state, score: res.score }
      yield put(authAction.setUserFromContractSuccess(data))
    }
  } catch (e) {
    console.log(e)
  }
}
// function* getUserFromContract(action) {
//   console.log(action)
//   try {
//     yield put(authAction.setUserFromContractSuccess())
//   } catch (e) {
//     console.log(e)
//     yield put(
//       authAction.setUserFromContractFail(
//         e.response.data.message,
//       ),
//     )
//   }
// }

export default function*() {
  yield all([
    takeLatest('REGISTER', registerSaga),
    takeLatest('LOGIN', loginSaga),
    takeLatest('SET_AUTH', setAuthen),
    // takeLatest(
    //   'SET_USER_FROM_CONTRACT',
    //   getUserFromContract,
    // ),
  ])
}
