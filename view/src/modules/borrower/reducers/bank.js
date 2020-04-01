import { fromJS } from 'immutable'
const initialState = fromJS({
  loading: false,
  data: [],
  loadingAdd: false,
  openModalAdd: false,
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
    case 'OPEN_ADD_BANK_MODAL':
      return state.set('openModalAdd', true)
    case 'CLOSE_ADD_BANK_MODAL':
      return state.set('openModalAdd', false)
    case 'ADD_BANK':
      return state.set('loadingAdd', true)
    case 'ADD_BANK_SUCCESS':
      return state.set('loadingAdd', false)
    case 'ADD_BANK_FAIL':
      return state.set('loadingAdd', false)
    default:
      return state
  }
}
