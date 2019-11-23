import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '../hocs/with-redux'
import { LandingLayout } from '../layouts/landing'
import RegisterLoanContainer from '../modules/authentication/containers/RegisterLoan'
import withIntl from '~/hocs/with-intl'
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
    },
    dispatch,
  )
export default compose(
  withRedux(null, mapDispatchToProps),
  withIntl,
)(RegisterLoanPage)
