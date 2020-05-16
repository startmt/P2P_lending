import React from 'react'
import { Descriptions, Skeleton } from 'antd'

const UserDescription = ({
  title,
  contractData = false,
  loading,
  userData,
}) => {
  const { data } = userData
  let addressJson = null
  if (data) {
    addressJson = JSON.parse(data?.user?.address) || {}
  }

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
          {`${data?.user?.firstName} ${data?.user?.lastName}`}
        </Descriptions.Item>
        {contractData && (
          <Descriptions.Item label="คะแนนความประพฤติ">
            {data?.manner?.score} คะแนน
          </Descriptions.Item>
        )}
        <Descriptions.Item label="เบอร์โทรศัพท์">
          {data?.user?.phoneNumber}
        </Descriptions.Item>
        <Descriptions.Item label="เลขบัตรประจำตัวประชาชน">
          {'xxxxxxx' + data?.user?.citizenId.slice(7)}
        </Descriptions.Item>
        {addressJson && (
          <Descriptions.Item span={2} label="ที่อยู่">
            {`บ้านเลขที่. ${addressJson.thaiAddressMoo ||
              ''}, ${addressJson.thaiAddressThanon ||
              ''}, ต. ${addressJson.thaiAddressDistrict ||
              ''} อ. ${addressJson.thaiAddressAmphur ||
              ''} จ. ${addressJson.thaiAddressProvince ||
              ''} ${addressJson.zipCode || ''} `}
          </Descriptions.Item>
        )}
      </Descriptions>
    </Skeleton>
  )
}

export default UserDescription
