import React from 'react'
import { Button } from 'antd'
import Router from 'next/router'
const LendingDetailButton = ({
  state,
  contractAddress,
}) => {
  const RouteToContractPage = () => {
    Router.push(`/my/${contractAddress}`)
  }
  if (state === 'INIT' || state === 'CHECKED')
    return (
      <Button
        className="ant-button"
        onClick={RouteToContractPage}>
        ดูข้อมูล
      </Button>
    )
  return null
}

export default LendingDetailButton
