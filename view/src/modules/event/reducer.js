import { fromJS } from 'immutable'
const initialState = fromJS({
  modal: false,
  loading: false,
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'CREATE_LENDING':
      return state.set('loading', true)
    case 'CREATE_LENDING_SUCCESS':
      return state.set('loading', false).set('modal', false)
    case 'CREATE_LENDING_FAIL':
      return state.set('loading', false)
    case 'CREATE_LENDING_OPEN_MODAL':
      return state.set('modal', true)
    case 'CREATE_LENDING_CLOSE_MODAL':
      return state.set('modal', false)
    default:
      return state
  }
}
