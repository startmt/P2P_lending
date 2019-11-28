import { fromJS } from 'immutable'
const initialState = fromJS({
  isAuth: null,
  username: '',
  isIdentify: null,
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
    default:
      return state
  }
}
