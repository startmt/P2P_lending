import { fromJS } from 'immutable'
const initialState = fromJS({
  loading: false,
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
    default:
      return state
  }
}
