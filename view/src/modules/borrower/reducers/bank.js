import { fromJS } from 'immutable'
const initialState = fromJS({
  loading: false,
  data: [],
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'LOADING_BANK':
      return state.set('loading', true)
    case 'LOADING_BANK_SUCCESS':
      return state
        .set('loading', false)
        .set('data', fromJS(action.payload.data))
    case 'LOADING_BANK_FAIL':
      return state.set('loading', false)
    default:
      return state
  }
}
