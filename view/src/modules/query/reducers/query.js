import { fromJS } from 'immutable'
const initialState = fromJS({
  pageName: '',
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'SET_PAGE_NAME':
      return state
      .set('pageName', action.payload.name)
    default:
      return state
  }
}
