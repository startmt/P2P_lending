import React from 'react'
import { Button } from 'antd'
import Router from 'next/router'
const LendingDetailButton = ({ state, lendingId }) => {
  const RouteToLendingPage = () => {
    Router.push(`/user/lending/${lendingId}`)
  }
  if (
    state === 'INIT' ||
    state === 'CHECKED' ||
    state === 'REJECTED'
  ) {
    return (
      <Button
        className="ant-button"
        onClick={RouteToLendingPage}>
        ดูข้อมูล
      </Button>
    )
  }
  return null
}

export default LendingDetailButton
