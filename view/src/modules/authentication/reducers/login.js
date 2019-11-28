import { fromJS } from 'immutable'
const initialState = fromJS({
  isLoading: false,
  error: '',
  isError: null,
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'LOGIN':
      return state
        .set('isLoading', fromJS(true))
        .set('isError', fromJS(null))
    case 'LOGIN_SUCCESS':
      return state
        .set('isLoading', fromJS(false))
        .set('isError', fromJS(false))
    case 'LOGIN_FAIL':
      return state
        .set('isLoading', fromJS(false))
        .set('error', fromJS(action.payload.error))
        .set('isError', fromJS(true))
    default:
      return state
  }
}
