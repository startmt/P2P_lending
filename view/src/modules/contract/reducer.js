import { fromJS, Map } from 'immutable'
const initialState = fromJS({
  loading: false,
  data: Map({}),
  loadingList: false,
  contractList: [],
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
    case 'GET_CONTRACT_LIST':
      return state.set('loadingList', true)
    case 'GET_CONTRACT_LIST_SUCCESS':
      return state
        .set('loadingList', false)
        .set('contractList', action.payload.data)
    case 'GET_CONTRACT_LIST_FAIL':
      return state.set('loadingList', false)
    default:
      return state
  }
}
