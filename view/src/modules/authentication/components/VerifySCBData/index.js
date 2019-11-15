import React from 'react'
import { Result, Button, Descriptions } from 'antd'
const VerifySCBData = () => {
  return (
    <Result
      status="success"
      title="สำเร็จ!! กรุณายืนยันข้อมูลของท่าน"
      subTitle={
        <Descriptions className="section">
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
      }
      extra={[
        <Button type="success" key="console">
          ยืนยัน
        </Button>,
        <Button key="buy">ยกเลิก</Button>,
      ]}
    />
  )
}
export default VerifySCBData
