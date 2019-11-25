import React, { useEffect } from 'react'
import { checkAuth } from '../modules/authentication/api/auth'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authAction } from '~/modules/authentication/actions/'
export default (Component) => {
  const withAuth = (props) => {
    useEffect(() => {
      checkAuth()
        .then((res) =>
          props.setAuth({ ...res.data, isAuth: true }),
        )
        .catch((e) => props.setAuth({ isAuth: false }))
    }, [])
    return <Component {...props} />
  }

  withAuth.getInitialProps = async (context) => {
    let composedProps = {}
    if (Component.getInitialProps) {
      composedProps = await Component.getInitialProps({
        ...context,
      })
    }
    return composedProps
  }

  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        setAuth: authAction.setAuth,
      },
      dispatch,
    )
  return connect(
    null,
    mapDispatchToProps,
  )(withAuth)
}
