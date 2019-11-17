import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import VerifySCB from '~/modules/authentication/containers/VerifySCB'
const RegisterLoanPage = (props) => {
  const { setPageName } = props
  console.log(this.props.location.state.email)
  setPageName('otp')
  return (
    <Fragment>
      <LandingLayout>
        <VerifySCB />
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
