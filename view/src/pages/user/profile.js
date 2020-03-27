import React from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { DashboardLayout } from '~/layouts/dashboard'
import ProfileContainer from '~/modules/borrower/containers/ProfileContainer'
const Profile = (props) => {

  const { setPageName } = props
  setPageName('borrowerProfile')
  return (
    <DashboardLayout>
      <ProfileContainer />
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
)(Profile)
