import { fromJS } from 'immutable'
const initialState = fromJS({
  isAuth: null,
  username: ''
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'SET_USERNAME':
      return state
        .set('isAuth', fromJS(action.payload.isAuth))
        .set('username', fromJS(action.payload.username))
    default:
      return state
  }
}
