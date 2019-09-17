import { combineReducers } from 'redux-immutable'
import authReducer from '~/modules/authentication/reducers'

export default combineReducers({
    authentication: authReducer
})