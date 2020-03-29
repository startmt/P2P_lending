import { fromJS } from 'immutable'
const initialState = fromJS({
  interest: 0,
  loading: false,
  changeLoading: false,
  fee: 0,
})
export default function reducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case 'SET_INTEREST':
      return state.set('loading', true)
    case 'SET_INTEREST_SUCCESS':
      return state.set(
        'interest',
        fromJS(action.payload.interest).set(
          'loading',
          false,
        ),
      )
    case 'SET_INTEREST_FAIL':
      return state
        .set('loading', false)
        .set('changeLoading', false)
    case 'SET_FEE':
      return state.set('loading', true)
    case 'GET_INTEREST_DATA':
      return state.set('loading', true)
    case 'SET_INTEREST_DATA':
      return state.set('changeLoading', true)
    case 'SET_INTEREST_DATA_SUCCESS':
      return state
        .set('loading', false)
        .set('interest', fromJS(action.payload.interest))
        .set('fee', fromJS(action.payload.fee))
        .set('changeLoading', false)
    case 'SET_FEE_SUCCESS':
      return state.set(
        'fee',
        fromJS(action.payload.fee).set('loading', false),
      )
    default:
      return state
  }
}
