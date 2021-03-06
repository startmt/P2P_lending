import React from 'react'
import { Tag } from 'antd'
const StateTags = ({ state }) => {
  if (state === 'INIT') {
    return <Tag color="cyan">รอเจ้าหน้าที่ตรวจสอบ</Tag>
  }
  if (state === 'CHECKED') {
    return <Tag color="geekblue">อยู่บน Market place</Tag>
  }
  if (state === 'LENDING') {
    return <Tag color="blue">อยู่ในระหว่างการกู้</Tag>
  }
  if (state === 'SUCCESS') {
    return <Tag color="green">สิ้นสุดสัญญา</Tag>
  }
  if (state === 'REJECT') {
    return <Tag color="red">ถูกยกเลิก</Tag>
  }
  return null
}

export default StateTags
