import React, { Fragment, useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import OtpContainer from '~/modules/authentication/containers/OtpContainer'
import { getOtp } from '~/helpers/scbEasy'
import withIntl from '../../hocs/with-intl'
const RegisterLoanPage = (props) => {
  const { setPageName, otp } = props
  setPageName('otp')
  return (
    <Fragment>
      <LandingLayout>
        <OtpContainer otpCode={otp}/>
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
RegisterLoanPage.getInitialProps = async ({ query }) => {
  try {
    const otpCode = await getOtp(query.code)
    return otpCode.data
  } catch (e) {
    return query
  }
}
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
  withIntl
)(RegisterLoanPage)
