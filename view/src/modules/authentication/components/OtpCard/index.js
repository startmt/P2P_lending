import React from 'react'
import { Result } from 'antd'
const OtpCard = ({otpCode='0'}) => {
  return (
    <Result
      status="success"
      title="กรุณานำรหัสไปกรอกในหน้าถัดไป"
      subTitle={`รหัส OTP ของคุณคือ ${otpCode}`}
    />
  )
}
export default OtpCard
