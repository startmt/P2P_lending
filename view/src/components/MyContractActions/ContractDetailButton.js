import React from 'react'
import { Button } from 'antd'
import Router from 'next/router'
const ContractDetailButton = ({
  state,
  contractAddress,
}) => {
  const RouteToContractPage = () => {
    Router.push(`/user/contract/${contractAddress}`)
  }
  if (state === 'LENDING' || state === 'SUCCESS')
    return (
      <Button
        className="ant-button"
        onClick={RouteToContractPage}>
        ดูสัญญากู้
      </Button>
    )
  return null
}

export default ContractDetailButton
