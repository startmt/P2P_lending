import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import OtpContainer from '~/modules/authentication/containers/OtpContainer'
import { getOtp } from '~/helpers/scbEasy'
import withIntl from '../../hocs/with-intl'
const OtpPage = (props) => {
  const { setPageName, otp, accessToken } = props
  if (accessToken) {
    localStorage.setItem('scbToken', accessToken)
  }
  setPageName('otp')
  return (
    <Fragment>
      <LandingLayout>
        <OtpContainer otpCode={otp} />
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
OtpPage.getInitialProps = async ({ query }) => {
  try {
    const otpCode = await getOtp(query.code)
    return otpCode.data
  } catch (e) {
    console.log(e)
  }
}
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
  withIntl,
)(OtpPage)
