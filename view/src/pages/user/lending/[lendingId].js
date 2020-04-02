import React, { useEffect } from 'react'
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
import { Card, Skeleton } from 'antd'
import { isEmpty } from 'lodash'
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
          <Skeleton loading={loadingObj}>
            {!isEmpty(data) && (
              <UserDescription
                title="ผู้กู้"
                userData={data}
                loading={loadingObj}
              />
            )}
          </Skeleton>
          <Skeleton loading={loadingObj}>
            {!isEmpty(data) && (
              <ContractDescription
                title="สัญญาการกู้"
                contractData={data}
                loading={loadingObj}
              />
            )}
          </Skeleton>
          <PaymentSummaryDescription title="สรุปการชำระเงิน" />
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
