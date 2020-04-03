import React, { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import { compose } from 'redux'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import { bindActionCreators } from 'redux'
import { lendingAction } from '../../../modules/borrower/actions'
import { interestAction } from '~/modules/query/actions'
import {
  UserDescription,
  ContractDescription,
  PaymentSummaryDescription,
} from '../../../components/Description'
import { Card } from 'antd'
import LendingPaymentStep from '../../../components/Step/LendingPaymentStep'
import { Header } from 'semantic-ui-react'
const LendingById = (props) => {
  const {
    router,
    getInterest,
    getDataById,
    data,
    loadingObj,
  } = props

  useEffect(() => {
    getDataById(router.query.lendingId)
    getInterest()
  }, [])
  return (
    <LandingLayout>
      <div className="container section">
        <Card loading={loadingObj}>
          <LendingPaymentStep />
        </Card>
      </div>
    </LandingLayout>
  )
}
const mapStateToProps = (state) => ({
  loadingObj: state.getIn([
    'lending',
    'lending',
    'loadingObj',
  ]),
  data: state
    .getIn(['lending', 'lending', 'dataById'])
    .toJS(),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getDataById: lendingAction.getLendingData,
      getInterest: interestAction.getInterestData,
    },
    dispatch,
  )
export default compose(
  withRouter,
  withRedux(mapStateToProps, mapDispatchToProps),
)(LendingById)
