import { Map, isImmutable } from 'immutable'
import createSelector from '~/helpers/createImmuableSelector'
export const getAuth = (state) =>
  isImmutable(state)
    ? state.getIn(['authentication', 'auth'])
    : Map()

export const isIdentify = createSelector(
  getAuth,
  (auth) => auth.get('isIdentify', false),
)
export const getUsername = createSelector(
  getAuth,
  (auth) => auth.get('username', null),
)
export const isAuth = createSelector(
  getAuth,
  (auth) => auth.get('isAuth', false),
)
export const isConnectScb = createSelector(
  getAuth,
  (auth) => auth.get('isConnectScb', false),
)

export const getRole = createSelector(
  getAuth,
  (auth) => auth.get('role', false),
)
