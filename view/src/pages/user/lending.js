import React, { useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { DashboardLayout } from '~/layouts/dashboard'
import { lendingAction } from '../../modules/borrower/actions'
import { LendingTable } from '../../components/LendingTable'
const Index = (props) => {
  const { setPageName, getLendingList } = props

  useEffect(() => {
    setPageName('stateLoan')
    getLendingList()
  }, [])
  return (
    <DashboardLayout>
      <div className="container section">
        <LendingTable />
      </div>
    </DashboardLayout>
  )
}
const mapStateToProps = null
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
      getLendingList: lendingAction.getLendingList,
    },
    dispatch,
  )
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Index)
