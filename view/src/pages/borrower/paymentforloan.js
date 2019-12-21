import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import PaymentForLoan from '~/modules/borrower/containers/PaymentForLoan/PaymentForLoan'
const Index = (props) => {
  const { setPageName } = props
  setPageName('paymentForLoan')
  return (
    <LandingLayout>
        <PaymentForLoan />
    </LandingLayout>
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
)(Index)
