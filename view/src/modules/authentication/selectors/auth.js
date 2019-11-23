import { Map, isImmutable } from 'immutable'
import createSelector from '~/helpers/createImmuableSelector'
export const getAuth = (state) =>
  isImmutable(state)
    ? state.getIn(['authentication', 'auth'])
    : Map()

export const isIdentify = createSelector(
  getAuth,
  (login) => login.get('isIdentify', false),
)
export const getUsername = createSelector(
  getAuth,
  (login) => login.get('username', null),
)
