import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '../hocs/with-redux'
import { LandingLayout } from '../layouts/landing'
import LoginContainer from '../modules/authentication/containers/Login'
const RegisterLoanPage = (props) => {
  const { setPageName } = props
  setPageName('Login')
  return (
    <Fragment>
      <LandingLayout>
        <LoginContainer />
      </LandingLayout>
    </Fragment>
  )
}
const mapStateToProps = null
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
    },
    dispatch,
  )
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(RegisterLoanPage)
