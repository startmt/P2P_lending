import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import Router from 'next/router'
import { connect } from 'react-redux'
import { Lending } from '../../helpers/web3'
import { mapUserToObject } from '../../contract/Lending'
const PaymentButton = ({
  state,
  contractAddress,
  role,
}) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const borrower = async () => {
      try {
        if (contractAddress) {
          const borrower = await Lending(contractAddress)
            .methods.borrower()
            .call()
          const borrowerObj = mapUserToObject(borrower)
          if (borrowerObj.withdrawn === true) {
            setVisible(true)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
    borrower()
  })
  const RouteToPaymentPage = () => {
    Router.push(`/user/payment/${contractAddress}`)
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
