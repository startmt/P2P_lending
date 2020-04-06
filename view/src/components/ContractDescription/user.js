import React from 'react'
import { Descriptions, Skeleton } from 'antd'

const UserDescription = ({ title, loading, userData }) => {
  return (
    <Skeleton loading={loading}>
      <Descriptions
        column={{
          xxl: 2,
          xl: 2,
          lg: 2,
          md: 2,
          sm: 1,
          xs: 1,
        }}
        title={title}>
        <Descriptions.Item label="ชื่อนามสกุล">
          {`${userData?.firstname} ${userData?.lastname}`}
        </Descriptions.Item>
        (
        <Descriptions.Item label="คะแนนความประพฤติ">
          {userData?.score} คะแนน
        </Descriptions.Item>
        )
        <Descriptions.Item label="สถานะการใช้งาน">
          {userData?.state}
        </Descriptions.Item>
        )
      </Descriptions>
    </Skeleton>
  )
}

export default UserDescription
