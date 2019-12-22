import React from 'react'
import { Card, Descriptions } from 'antd'
import { useSelector } from 'react-redux'
const ProfileCard = () => {
  const authDetailSelector = useSelector((state) =>
    state.getIn(['authentication', 'auth', 'userDetail']),
  )
  const addressJson = JSON.parse(
    authDetailSelector.get('address') || '{}',
  )
  return (
    <Card>
      <Descriptions title="ข้อมูลส่วนตัว">
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
    </Card>
  )
}

export default ProfileCard
