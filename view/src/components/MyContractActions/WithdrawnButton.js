import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import Router from 'next/router'
import { Lending } from '../../helpers/web3'
import { mapUserToObject } from '../../contract/Lending'
import { connect } from 'react-redux'
const WithdrawnButton = ({ contractAddress, role }) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const borrower = async () => {
      try {
        const borrower = await Lending(contractAddress)
          .methods.borrower()
          .call()
        const state = await Lending(contractAddress)
          .methods.state()
          .call()
        const borrowerObj = mapUserToObject(borrower)
        if (
          borrowerObj.withdrawn === false &&
          state === 'LENDING'
        ) {
          setVisible(true)
        }
      } catch (error) {}
    }
    const lender = async () => {
      try {
        const lender = await Lending(contractAddress)
          .methods.lender()
          .call()
        const state = await Lending(contractAddress)
          .methods.state()
          .call()
        const lenderObj = mapUserToObject(lender)
        if (
          (state === 'SUCCESS_LENDING' ||
            state === 'BORROWER_NOT_ACCEPT' ||
            state === 'REJECTED') &&
          lenderObj.withdrawn === false
        ) {
          setVisible(true)
        }
      } catch (error) {}
    }
    if (role === 'borrower') {
      borrower()
    }
    if (role === 'lender') {
      lender()
    }
  }, [role])
  const RouteToPaymentPage = () => {
    Router.push(`/user/withdrawn/${contractAddress}`)
  }
  if (visible)
    return (
      <Button
        className="ant-button"
        type="primary"
        onClick={RouteToPaymentPage}>
        ถอนเงิน
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
)(WithdrawnButton)
