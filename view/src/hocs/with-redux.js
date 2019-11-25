import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
// import withReduxSaga from 'next-redux-saga'

import createStore from '~/store'

export default (...connectParams) => (
  ComposedComponent,
) => {
  const composeComponent = () =>
    class extends Component {
      static async getInitialProps(ctx) {
        let composedProps = {}
        if (ComposedComponent.getInitialProps) {
          composedProps = await ComposedComponent.getInitialProps(
            {
              ...ctx,
            },
          )
        }

        return composedProps
      }

      render() {
        return <ComposedComponent {...this.props} />
      }
    }
  return withRedux(makeStore, ...connectParams)(
    composeComponent(),
  )
}

export function makeStore(initialState) {

  const state = {
    ...initialState,
  }
  const store = createStore(state)
  return store
}
