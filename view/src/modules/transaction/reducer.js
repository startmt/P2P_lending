import { fromJS } from 'immutable'
const initialState = fromJS({
  loading: true,
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'LOADING_TRANSACTION_LOADING':
      return state.set('loading', true)
    case 'LOADING_TRANSACTION_LOADING_SUCCESS':
      return state.set('loading', false)
    default:
      return state
  }
}
