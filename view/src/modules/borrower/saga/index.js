import { call } from 'redux-saga/effects'
import lendingSaga from './lending'
export default [call(lendingSaga)]
