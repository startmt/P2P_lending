import React from 'react'
import { Result, Button, Descriptions } from 'antd'
import { useSelector } from 'react-redux'
import Link from 'next/link'
const VerifySCBData = () => {
  const authDetailSelector = useSelector((state) =>
    state.getIn(['authentication', 'auth', 'userDetail']),
  )
  const addressJson = JSON.parse(
    authDetailSelector.get('address') || '{}',
  )
  return (
    <Result
      status="success"
      title="สำเร็จ!! กรุณายืนยันข้อมูลของท่าน"
      subTitle={
        <Descriptions className="section">
          <Descriptions.Item label="ชื่อ-นามสกุล">
            {`${authDetailSelector.get('firstName') ||
              ''} ${authDetailSelector.get('lastName') ||
              ''}`}
          </Descriptions.Item>
          <Descriptions.Item label="เบอร์โทรศัพท์">
            {authDetailSelector.get('phoneNumber') || ''}
          </Descriptions.Item>
          <Descriptions.Item label="วันเกิด">
            {authDetailSelector.get('birthDate') || ''}
          </Descriptions.Item>
          <Descriptions.Item label="เลขบัตรประจำตัวประชาชน">
            {authDetailSelector.get('citizenId') || ''}
          </Descriptions.Item>
          <Descriptions.Item label="ที่อยู่">
            {`บ้านเลขที่. ${addressJson.thaiAddressMoo ||
              ''}, ${addressJson.thaiAddressThanon ||
              ''}, ต. ${addressJson.thaiAddressDistrict ||
              ''} อ. ${addressJson.thaiAddressAmphur ||
              ''} จ. ${addressJson.thaiAddressProvince ||
              ''} ${addressJson.zipCode || ''} `}
          </Descriptions.Item>
        </Descriptions>
      }
      extra={[
        <Link href="/user/profile">
          <Button type="success" key="console">
            ยืนยัน
          </Button>
        </Link>,
      ]}
    />
  )
}
export default VerifySCBData
