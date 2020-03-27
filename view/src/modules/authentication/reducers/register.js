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
    case 'REGISTER':
      return state
        .set('isLoading', fromJS(true))
        .set('isError', fromJS(null))
    case 'REGISTER_SUCCESS':
      return state
        .set('isLoading', fromJS(false))
        .set('isError', fromJS(false))
    case 'REGISTER_FAIL':
      return state
        .set('isLoading', fromJS(false))
        .set('error', fromJS(action.payload.error))
        .set('isError', fromJS(true))
    case 'RESET_STATE':
      return initialState
    default:
      return state
  }
}
