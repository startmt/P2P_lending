import React, { useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import {
  pageNameAction,
  interestAction,
} from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { AdminLayout } from '~/layouts/admin'
import { Card } from 'antd'
import { AdminInterestForm } from '../../components/AdminInterestForm'
const Index = (props) => {
  const {
    setPageName,
    getInterest,
    interestLoading,
  } = props

  useEffect(() => {
    setPageName('adminInterest')
    getInterest()
  }, [])
  return (
    <AdminLayout>
      <section className="section">
        <div className="container">
          <Card
            loading={interestLoading}
            title="อัตราดอกเบี้ย">
            <AdminInterestForm />
          </Card>
        </div>
      </section>
    </AdminLayout>
  )
}
const mapStateToProps = (state) => ({
  interestLoading: state.getIn([
    'page',
    'interest',
    'loading',
  ]),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
      getInterest: interestAction.getInterestData,
    },
    dispatch,
  )
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Index)
