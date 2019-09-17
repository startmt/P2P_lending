import { createStore, applyMiddleware } from 'redux'
import { fromJS, Map } from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import mainSaga from '~/saga'
import rootReducer from '~/reducer'

const defaultState = fromJS({})

export default (initialState = defaultState) => {
    console.log('Create Store')
  if (!Map.isMap(initialState)) {
    initialState = fromJS(initialState)
  }

  const sagaMiddleware = createSagaMiddleware()

  const configuredStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  configuredStore.sagaTask = sagaMiddleware.run(mainSaga)

  return configuredStore
}