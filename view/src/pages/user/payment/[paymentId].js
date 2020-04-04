import React, { Fragment, useState, useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import { paymentAction } from '../../../modules/payment'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import { PaymentMenu } from '../../../components/BankMenu'
import moment from 'moment'
import { Result, Button, Icon, Skeleton } from 'antd'
import { Form, Input } from 'semantic-ui-react'
import { contractAction } from '../../../modules/contract'
const Index = (props) => {
  const {
    setPageName,
    url,
    handlePayment,
    getContract,
    contractData,
    loadingContract,
  } = props
  const [bank, setBank] = useState(null)
  useEffect(() => {
    setPageName('paymentForLoan')
    getContract(url.query.paymentId)
  }, [])
  const onSubmit = () => {
    handlePayment(
      url.query.paymentId,
      bank.key,
      contractData.amount,
    )
  }
  return (
    <LandingLayout>
      <div className="container section">
        <Result
          icon={<Icon type="bank" />}
          title="การจ่ายเงิน"
          subTitle="กรุณาเลือกช่องทางการจ่ายเงิน">
          <Skeleton loading={loadingContract}>
            <Form>
              <Form.Field>
                <label>หมายเลขสัญญาการกู้</label>
                <Input
                  value={url.query.paymentId}
                  disabled
                />
              </Form.Field>
              <Form.Field>
                <label>จำนวนเงินที่ต้องจ่าย</label>
                <Input
                  value={contractData?.amount}
                  disabled
                />
              </Form.Field>
              <Form.Field>
                <label>กำหนดวันจ่าย</label>
                <Input
                  value={moment(
                    Number(contractData.date),
                  ).format('L')}
                  disabled
                />
              </Form.Field>
              <Form.Field>
                <label>กรุณาเลือกธนาคาร</label>
                <PaymentMenu
                  data={bank}
                  setData={setBank}
                />
              </Form.Field>
              <Button onClick={onSubmit} type="submit">
                ยืนยัน
              </Button>
            </Form>
          </Skeleton>
        </Result>
      </div>
    </LandingLayout>
  )
}

const mapStateToProps = (state) => ({
  contractData: state.getIn([
    'contract',
    'contract',
    'data',
  ]),
  loadingContract: state.getIn([
    'contract',
    'contract',
    'loading',
  ]),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
      handlePayment: paymentAction.payment,
      getContract: contractAction.getCurrentContract,
    },
    dispatch,
  )
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Index)
