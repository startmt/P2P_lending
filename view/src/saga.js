import { all } from 'redux-saga/effects'
import authenticationSaga from '~/modules/authentication/saga'
import lendingSaga from '~/modules/borrower/saga'
import adminSaga from '~/modules/admin/saga'
import { paymentSaga } from './modules/payment'
import querySaga from '~/modules/query/saga'
import { transactionSaga } from './modules/transaction'
const sagas = [
  all(authenticationSaga),
  all(lendingSaga),
  all(adminSaga),
  all(querySaga),
  all(paymentSaga),
  all(transactionSaga),
]

export default function* mainSaga() {
  console.log('saga')
  yield all(sagas)
}
