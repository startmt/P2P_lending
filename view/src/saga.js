import { all } from 'redux-saga/effects'
import authenticationSaga from '~/modules/authentication/saga'
import lendingSaga from '~/modules/borrower/saga'
const sagas = [all(authenticationSaga), all(lendingSaga)]

export default function* mainSaga() {
  console.log('saga')
  yield all(sagas)
}
