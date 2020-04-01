import React from 'react'
import { Card, Descriptions, Tag } from 'antd'
import PropTypes from 'prop-types'
const UserBankListItem = ({ bankAccount, name, state }) => {
  return (
    <Descriptions
      column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
      title="บัญชี">
      <Descriptions.Item label="ชื่อบัญชี">
        {name}
      </Descriptions.Item>
      <Descriptions.Item label="หมายเลขบัญชี">
        {bankAccount}
      </Descriptions.Item>
      <Descriptions.Item label="สถานะ">
        {(state === 'CREATED' && (
          <Tag color="blue">รอระบบตรวจสอบ</Tag>
        )) ||
          (state === 'VERIFIED' && (
            <Tag color="green">สามารถใช้งานได้</Tag>
          ))}
      </Descriptions.Item>
    </Descriptions>
  )
}

UserBankListItem.propTypes = {
  bankAccount: PropTypes.string,
  name: PropTypes.string,
  state: PropTypes.string,
}

export default UserBankListItem
