import React, { useEffect } from 'react'
import { withRouter } from 'next/router'
import { compose } from 'redux'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import { bindActionCreators } from 'redux'
import { lendingAction } from '../../../modules/borrower/actions'
import { interestAction } from '~/modules/query/actions'
import { Card, Result } from 'antd'
import LendingPaymentStep from '../../../components/Step/LendingPaymentStep'
import { LendingBorrower } from '../../../components/Step'
const LendingById = (props) => {
  const {
    router,
    getInterest,
    getDataById,
    data,
    loadingObj,
    role,
  } = props

  useEffect(() => {
    getDataById(router.query.lendingId)
    getInterest()
  }, [])
  return (
    <LandingLayout>
      <div className="container section">
        <Card loading={loadingObj}>
          {data?.data?.state === 'CHECKED' &&
            role === 'lender' && <LendingPaymentStep />}
          {role === 'borrower' &&
            (data?.data?.state === 'CHECKED' ||
              data?.data?.state === 'INIT') && (
              <LendingBorrower />
            )}
        </Card>
      </div>
    </LandingLayout>
  )
}
const mapStateToProps = (state) => ({
  role: state.getIn(['authentication', 'auth', 'role']),
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
