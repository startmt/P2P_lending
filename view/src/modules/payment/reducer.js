import { fromJS, Map } from 'immutable'
const initialState = fromJS({
  loading: false,
  data: Map({}),
  withdrawnLoading: false,
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'PAYMENT':
      return state.set('loading', true)
    case 'PAYMENT_SUCCESS':
      return state.set('loading', false)
    case 'WITHDRAWN':
      return state.set('withdrawnLoading', true)
    case 'WITHDRAWN_SUCCESS':
      return state.set('withdrawnLoading', false)
    default:
      return state
  }
}
