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
    case 'INIT_MY_LENDING_LIST':
      return state.set('loading', true)
    case 'INIT_MY_LENDING_LIST_SUCCESS':
      return state
        .set('loading', false)
        .set('data', fromJS(action.payload.data))
    default:
      return state
  }
}
