import React, { Fragment, useState } from 'react'
import { Form, Input } from 'semantic-ui-react'
import { UserBankMenu } from '../BankMenu'
import { Button, Result } from 'antd'
import { connect } from 'react-redux'
const WithdrawnFormField = ({
  contractId,
  amount,
  disabled,
  fee,
  handleWithdrawn,
  setBank,
  loading,
  error,
  transactionLoading,
}) => {
  if (error) {
    return (
      <Result
        status="error"
        title="เกิดข้อผิดพลาด"
        subTitle="คุณไม่สามารถถอนเงินได้"
      />
    )
  }
  return (
    <Fragment>
      <Form.Field>
        <label>หมายเลขสัญญาการกู้</label>
        <Input value={contractId} disabled />
      </Form.Field>

      {fee && (
        <Fragment>
          <Form.Field>
            <label>จำนวนเงินรวมดอกเบี้ย</label>
            <Input value={amount} disabled />
          </Form.Field>
          <Form.Field>
            <label>ค่าธรรมเนียม</label>
            <Input value={(amount * fee) / 100} disabled />
          </Form.Field>
        </Fragment>
      )}

      <Form.Field>
        <label>จำนวนเงินที่ได้รับ</label>
        <Input
          value={amount - (amount * fee) / 100 || amount}
          disabled
        />
      </Form.Field>
      <UserBankMenu setData={setBank} />
      <Button
        disabled={disabled || transactionLoading}
        onClick={handleWithdrawn}
        loading={loading || transactionLoading}
        type="submit">
        ยืนยัน
      </Button>
    </Fragment>
  )
}
const mapStateToProps = (state) => ({
  loading: state.getIn([
    'paymentReducer',
    'payment',
    'withdrawnLoading',
  ]),
  transactionLoading: state.getIn([
    'transaction',
    'transaction',
    'loading',
  ]),
})
export default connect(
  mapStateToProps,
  null,
)(WithdrawnFormField)
