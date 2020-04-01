import React, { useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { DashboardLayout } from '~/layouts/dashboard'
import ProfileContainer from '~/modules/borrower/containers/ProfileContainer'
import { bankAction } from '../../modules/borrower/actions'
const Profile = (props) => {
  const { setPageName, getBank } = props

  useEffect(() => {
    setPageName('userProfile')
    getBank()
  }, [])
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
      getBank: bankAction.getBank,
    },
    dispatch,
  )

export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Profile)
