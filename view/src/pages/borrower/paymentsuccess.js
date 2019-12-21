import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import PaymentSuccess from '~/modules/borrower/containers/PaymentSuccess/PaymentSuccess'
const Index = (props) => {
  const { setPageName } = props
  setPageName('paymentSuccess')
  return (
    <LandingLayout>
      <PaymentSuccess />
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
