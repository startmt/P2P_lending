import { all } from 'redux-saga/effects'
const sagas = []

export default function* mainSaga() {
  yield all(sagas)
}