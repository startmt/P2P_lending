import { Map, isImmutable } from 'immutable'
import createSelector from '~/helpers/createImmuableSelector'
export const getLogin = (state) =>
  isImmutable(state)
    ? state.getIn(['authentication', 'login'])
    : Map()

export const isLoading = createSelector(
  getLogin,
  (login) => login.get('isLoading', false),
)
export const getError = createSelector(
  getLogin,
  (login) => login.get('error', ''),
)
export const isError = createSelector(
  getLogin,
  (login) => login.get('isError', ''),
)
