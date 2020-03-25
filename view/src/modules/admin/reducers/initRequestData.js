import { fromJS } from 'immutable'
import { Map } from 'immutable'
const initialState = fromJS({
  loading: false,
  data: Map(),
  error: null,
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'GET_INIT_REQUEST_DATA':
      return state.set('loading', true)
    case 'GET_INIT_REQUEST_DATA_SUCCESS':
      return state
        .set('loading', false)
        .set('data', fromJS(action.payload.data))
    case 'GET_INIT_REQUEST_DATA_FAIL':
      return state.set('loading', false).set('error', true)
    case 'RESET_STATE':
      return initialState
    default:
      return state
  }
}
