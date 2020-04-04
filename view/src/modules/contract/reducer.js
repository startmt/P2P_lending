import { fromJS, Map } from 'immutable'
const initialState = fromJS({
  loading: false,
  data: Map({}),
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'GET_CURRENT_CONTRACT_TENOR':
      return state.set('loading', true)
    case 'GET_CURRENT_CONTRACT_TENOR_SUCCESS':
      return state
        .set('loading', false)
        .set('data', action.payload.data)
    case 'GET_CURRENT_CONTRACT_TENOR_FAIL':
      return state.set('loading', false)
    default:
      return state
  }
}
