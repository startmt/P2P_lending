import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import Router from 'next/router'
import { connect } from 'react-redux'
const PaymentButton = ({
  state,
  contractAddress,
  role,
}) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const borrower = async () => {
      try {
        const borrower = await Lending(contractAddress)
          .methods.borrower()
          .call()
        const borrowerObj = mapUserToObject(borrower)
        if (borrowerObj.withdrawn === true) {
          setVisible(true)
        }
      } catch (error) {}
    }
    borrower()
  })
  const RouteToPaymentPage = () => {
    Router.push(`/payment/${contractAddress}`)
  }
  if (visible && state === 'LENDING' && role === 'borrower')
    return (
      <Button
        className="ant-button"
        type="primary"
        onClick={RouteToPaymentPage}>
        จ่ายเงิน
      </Button>
    )
  return null
}
const mapStateToProps = (state) => ({
  role: state.getIn(['authentication', 'auth', 'role']),
})
export default connect(
  mapStateToProps,
  null,
)(PaymentButton)
