import { combineReducers } from 'redux-immutable'
import authReducer from '~/modules/authentication/reducers'
import queryReducer from '~modules/query/reducers'

export default combineReducers({
    authentication: authReducer,
    page: queryReducer
})