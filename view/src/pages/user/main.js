import React, { useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import {
  pageNameAction,
  interestAction,
} from '~/modules/query/actions'
import { lendingAction } from '~/modules/borrower/actions'
import withRedux from '~/hocs/with-redux'
import { DashboardLayout } from '~/layouts/dashboard'
import MainContainer from '~/modules/borrower/containers/MainContainer'
const Index = (props) => {
  const {
    setPageName,
    getSelfLending,
    getInterest,
    โ,
  } = props

  useEffect(() => {
    setPageName('borrowerMain')
    getSelfLending()
    getInterest()
  }, [])
  return (
    <DashboardLayout>
      <MainContainer />
    </DashboardLayout>
  )
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
      getSelfLending: lendingAction.getSelfLending,
      getInterest: interestAction.getInterestData,
    },
    dispatch,
  )
export default compose(
  withRedux(null, mapDispatchToProps),
)(Index)
