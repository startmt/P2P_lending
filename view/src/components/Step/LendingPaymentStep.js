import React, { useState, Fragment } from 'react'
import { Steps, Button, Result, Descriptions } from 'antd'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import {
  ContractDescription,
  UserDescription,
} from '../Description'
import { PaymentMenu } from '../BankMenu'
import { bindActionCreators } from 'redux'
import { paymentAction } from '../../modules/payment'
const { Step } = Steps

const LendingPaymentStep = ({
  data,
  loadingObj,
  paymentLoading,
  payment,
}) => {
  const [step, setStep] = useState(0)
  const [bank, setBank] = useState(null)
  const next = () => {
    setStep(step + 1)
  }

  const prev = () => {
    setStep(step - 1)
  }
  const DetailStep = () => {
    return (
      <Fragment>
        <UserDescription
          title="ผู้กู้"
          userData={data}
          loading={loadingObj}
        />

        <ContractDescription
          title="สัญญาการกู้"
          contractData={data}
          loading={loadingObj}
        />
      </Fragment>
    )
  }
  const ChooseBankStep = () => {
    return (
      <Form>
        <Form.Field>
          <label>กรุณาเลือกธนาคาร</label>
          <PaymentMenu setData={setBank} data={bank} />
        </Form.Field>
      </Form>
    )
  }

  const SummarryStep = () => {
    return (
      <Fragment>
        <Result>
          <Descriptions title="สรุปการให้สินเชื่อ">
            <Descriptions.Item label="จำนวนเงินที่ต้องจ่าย">
              {data.data.amount} บาท
            </Descriptions.Item>
            <Descriptions.Item label="ธนาคารที่ชำระเงิน">
              {bank.text}
            </Descriptions.Item>
          </Descriptions>
        </Result>
      </Fragment>
    )
  }

  const handleSubmit = async () => {
    await payment(data.data.id, bank.key, data.data.amount)
  }
  return (
    <Fragment>
      <Steps current={step} progressDot>
        <Step title="รายละเอียด" />
        <Step title="เลือกธนาคาร" />
        <Step title="จ่ายเงิน" />
      </Steps>
      <div className="p-4">
        {step == 0 && <DetailStep />}
        {step == 1 && <ChooseBankStep />}
        {step == 2 && <SummarryStep />}
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        {step === 2 && (
          <Button
            type="primary"
            className="ant-button"
            loading={paymentLoading}
            onClick={handleSubmit}>
            ยืนยัน
          </Button>
        )}
        {step > 0 && step < 2 && (
          <Button className="ant-button" onClick={prev}>
            ย้อนกลับ
          </Button>
        )}
        {step == 0 && (
          <Button
            type="primary"
            className="ant-button"
            onClick={next}>
            ถัดไป
          </Button>
        )}
        {step == 1 && (
          <Button
            type="primary"
            className="ant-button"
            onClick={next}
            disabled={!bank}>
            ถัดไป
          </Button>
        )}
      </div>
    </Fragment>
  )
}
const mapStateToProps = (state) => ({
  loadingObj: state.getIn([
    'lending',
    'lending',
    'loadingObj',
  ]),
  paymentLoading: state.getIn([
    'paymentReducer',
    'payment',
    'loading',
  ]),
  data: state
    .getIn(['lending', 'lending', 'dataById'])
    .toJS(),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      payment: paymentAction.payment,
    },
    dispatch,
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LendingPaymentStep)
