import { fromJS } from 'immutable'
const initialState = fromJS({
  loading: false,
  error: null,
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'CONFIRM_INIT_REQUEST_DATA':
      return state.set('loading', true)
    case 'CONFIRM_INIT_REQUEST_DATA_SUCCESS':
      return state.set('loading', false)
    case 'CONFIRM_INIT_REQUEST_DATA_FAIL':
      return state.set('loading', false).set('error', true)
    case 'RESET_STATE':
      return initialState
    default:
      return state
  }
}
