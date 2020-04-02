import { fromJS, Map } from 'immutable'
const initialState = fromJS({
  loading: false,
  data: [],
  loadingObj: false,
  dataById: Map(),
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'GET_CHECK_LENDING_LIST':
      return state.set('loading', true)
    case 'GET_CHECK_LENDING_LIST_SUCCESS':
      return state
        .set('loading', false)
        .set('data', fromJS(action.payload.data))
    case 'GET_CHECK_LENDING_LIST_FAIL':
      return state.set('loading', false)
    case 'GET_LENDING_DATA':
      return state.set('loadingObj', true)
    case 'GET_LENDING_DATA_SUCCESS':
      return state
        .set('loadingObj', false)
        .set('dataById', fromJS(action.payload.data))
    case 'GET_LENDING_DATA_FAIL':
      return state.set('loadingObj', false)
    default:
      return state
  }
}
