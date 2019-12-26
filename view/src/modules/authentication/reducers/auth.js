import { fromJS } from 'immutable'
import { Map } from 'immutable'
const initialState = fromJS({
  isAuth: null,
  username: '',
  isIdentify: null,
  isConnectScb: null,
  userDetail: Map()
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'SET_AUTH':
      return state
        .set('isAuth', fromJS(action.payload.authDesc.isAuth))
        .set('username', fromJS(action.payload.authDesc.username))
        .set(
          'isIdentify',
          fromJS(action.payload.authDesc.isIdentify),
        )
        .set(
          'isConnectScb',
          fromJS(action.payload.authDesc.isConnectScb),
        )
        .set(
          'userDetail',
          fromJS(action.payload.authDesc.userDetail)
        )
    default:
      return state
  }
}
