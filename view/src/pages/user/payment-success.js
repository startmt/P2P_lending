import React, { useEffect, useState } from 'react'
import { Result, Button, Card } from 'antd'
import { LandingLayout } from '../../layouts/landing'
import Router from 'next/router'
import withRedux from '~/hocs/with-redux'
import { compose } from 'redux'
import { useInterval } from '../../helpers/useInterval'
import { bindActionCreators } from 'redux'
import { transactionAction } from '../../modules/transaction'
const PaymentSucces = ({ loading, loadingAction }) => {
  useInterval(
    () => {
      loadingAction()
    },
    loading ? 2000 : null,
  )
  return (
    <LandingLayout>
      <div className="container section">
        <Card>
          <Result
            status="success"
            title="การจ่ายเงินสำเร็จ !"
            subTitle="กรุณารอ 1 - 2 นาทีเพื่อให้บล๊อกเชนเขียนข้อมูลธุรกรรม"
            extra={
              <Button
                onClick={() => Router.push('user/my')}
                loading={loading}
                type="primary"
                key="console">
                กลับสู่หน้าหลัก
              </Button>
            }
          />
        </Card>
      </div>
    </LandingLayout>
  )
}
const mapStateToProps = (state) => ({
  loading: state.getIn([
    'transaction',
    'transaction',
    'loading',
  ]),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loadingAction: transactionAction.loading,
    },
    dispatch,
  )

export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(PaymentSucces)
