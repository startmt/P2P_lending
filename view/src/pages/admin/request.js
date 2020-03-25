import React, { useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import { adminAction } from '~/modules/admin/actions'
import withRedux from '~/hocs/with-redux'
import { AdminLayout } from '~/layouts/admin'
import InitRequestTable from '../../components/InitRequestTable/InitRequestTable'
const Index = (props) => {
  const { setPageName, getInitRequest, resetState } = props
  setPageName('adminRequest')
  useEffect(() => {
    getInitRequest()
    return () => {
      resetState()
    }
  }, [])
  return (
    <AdminLayout>
      <section className="section">
        <div className="container">
          <InitRequestTable />
        </div>
      </section>
    </AdminLayout>
  )
}

const mapStateToProps = null
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
      getInitRequest: adminAction.getInitRequest,
      resetState: adminAction.resetState,
    },
    dispatch,
  )
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Index)
