import React, { Fragment, useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import { lendingAction } from '~/modules/borrower/actions'
import withRedux from '~/hocs/with-redux'
import { DashboardLayout } from '~/layouts/dashboard'
import MainContainer from '~/modules/borrower/containers/MainContainer'
const Index = (props) => {
  const { setPageName, getSelfLending } = props
  setPageName('borrowerMain')
  useEffect(() => {
    getSelfLending()
  }, [])
  return (
    <DashboardLayout>
      <MainContainer />
    </DashboardLayout>
  )
}

const mapStateToProps = null
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
      getSelfLending: lendingAction.getSelfLending,
    },
    dispatch,
  )
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Index)
