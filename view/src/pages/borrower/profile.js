import React, { Fragment } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { DashboardLayout } from '~/layouts/dashboard'
import VerifySCB from '~/modules/authentication/containers/VerifySCB'
const ProfileContainer = (props) => {
  const { setPageName } = props
  setPageName('borrowerProfile')
  return (
    <DashboardLayout>
      <VerifySCB />
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
)(ProfileContainer)
