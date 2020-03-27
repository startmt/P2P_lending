import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { DashboardLayout } from '~/layouts/dashboard'
import UploadFromBorrower from '~/modules/borrower/containers/UploadFromBorrower/UploadFromBorrower'
const Index = (props) => {
  const { setPageName } = props
  setPageName('uploadFromBorrower')
  return (
    <DashboardLayout>
      <UploadFromBorrower />
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
