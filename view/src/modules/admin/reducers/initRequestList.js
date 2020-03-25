import { fromJS } from 'immutable'
const initialState = fromJS({
  loading: false,
  data: [],
  error: null,
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'GET_INIT_REQUEST':
      return state.set('loading', true)
    case 'GET_INIT_REQUEST_SUCCESS':
      return state
        .set('loading', false)
        .set('data', fromJS(action.payload.data))
    case 'GET_INIT_REQUEST_FAIL':
      return state.set('loading', false).set('error', true)
    case 'RESET_STATE':
      return initialState
    default:
      return state
  }
}
