import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { DashboardLayout } from '~/layouts/dashboard'
import BorrowerFromContainer from '~/modules/borrower/containers/BorrowerFromContainer'
const Index = (props) => {
  const { setPageName } = props
  setPageName('borrowerFrom')
  return (
    <DashboardLayout>
      <BorrowerFromContainer/>
    </DashboardLayout>
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