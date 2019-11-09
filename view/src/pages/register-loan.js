import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '../hocs/with-redux'
import { LandingLayout } from '../layouts/landing'
import RegisterLoanContainer from '../modules/authentication/containers/RegisterLoan'
const RegisterLoanPage = (props) => {
  const { setPageName } = props
  setPageName('RegisterLoan')
  return (
    <Fragment>
      <LandingLayout>
        <RegisterLoanContainer />
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
