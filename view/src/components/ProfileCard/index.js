import React from 'react'
import { Card, Descriptions } from 'antd'
const ProfileCard = () => (
  <Card>
    <Descriptions title="ข้อมูลส่วนตัว">
      <Descriptions.Item label="ชื่อ-นามสกุล">
        ชาญศิลป์ ทองคำ
      </Descriptions.Item>
      <Descriptions.Item label="เบอร์โทรศัพท์">
        0910110111
      </Descriptions.Item>
      <Descriptions.Item label="วันเกิด">
        02/09/1997
      </Descriptions.Item>
      <Descriptions.Item label="เลขบัตรประจำตัวประชาชน">
        1200101730094
      </Descriptions.Item>
      <Descriptions.Item label="ที่อยู่">
        No. 18, Wantang Road, Xihu District, Hangzhou,
        Zhejiang, China
      </Descriptions.Item>
    </Descriptions>
  </Card>
)

export default ProfileCard
