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
        .set('isAuth', fromJS(action.payload.isAuth))
        .set('username', fromJS(action.payload.username))
        .set(
          'isIdentify',
          fromJS(action.payload.isIdentify),
        )
    default:
      return state
  }
}
