import { Map, isImmutable } from 'immutable'
import createSelector from '~/helpers/createImmuableSelector'
export const getRegister = (state) =>
  isImmutable(state)
    ? state.getIn(['authentication', 'register'])
    : Map()

export const isLoading = createSelector(
  getRegister,
  (register) => register.get('isLoading', false),
)
export const getError = createSelector(
  getRegister,
  (register) => register.get('error', ''),
)
export const isError = createSelector(
  getRegister,
  (register) => register.get('isError', ''),
)
