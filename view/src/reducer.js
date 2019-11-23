import { combineReducers } from 'redux-immutable'
import authReducer from '~/modules/authentication/reducers'
import queryReducer from '~modules/query/reducers'
import { reducer as formReducer } from 'redux-form'
export default combineReducers({
  authentication: authReducer,
  page: queryReducer,
})
