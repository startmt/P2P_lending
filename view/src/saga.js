import { all } from 'redux-saga/effects'
import authenticationSaga from '~/modules/authentication/saga'
const sagas = [all(authenticationSaga)]

export default function* mainSaga() {
  console.log('saga')
  yield all(sagas)
}
