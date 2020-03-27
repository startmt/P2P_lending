import React, { useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import { lendingAction } from '~/modules/borrower/actions'
import withRedux from '~/hocs/with-redux'
import { AdminLayout } from '~/layouts/admin'
import MainContainer from '~/modules/borrower/containers/MainContainer'
const Index = (props) => {
  const { setPageName, getSelfLending } = props
  setPageName('adminMain')
  useEffect(() => {
    getSelfLending()
  }, [])
  return (
    <AdminLayout>
      <div>ddd</div>
    </AdminLayout>
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
