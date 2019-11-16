import React, { useState } from 'react'
import {
  Row,
  Col,
  Empty,
  Card,
  Button,
  Descriptions,
} from 'antd'
import ProfileCard from '~/components/ProfileCard'
import VerifySCBCard from '~/components/VerifySCBCard'
import {
  getSCBToken,
  getAccountDetail,
} from '~/helpers/scbEasy'

const MainContainer = (props) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [otp, setOtp] = useState('')
  const handleOtp = async() => {
    const scbTokenApi = await getSCBToken()
    console.log(scbTokenApi)
    const token = scbTokenApi.data.data.accessToken
    const resourceOwnerId = scbTokenApi.headers.resourceownerid
    scbAcountDetailApi = await getAccountDetail(token, resourceOwnerId)
  }
  return (
    <section className="section">
      <div className="container">
        <Row gutter={[0, 7]}>
          <Col span={18}>
            {/* <ProfileCard/> */}
            <VerifySCBCard
              step={currentStep}
              next={() => {
                setCurrentStep(currentStep + 1)
              }}
              prev={() => {
                setCurrentStep(currentStep - 1)
              }}
              handleOtp={handleOtp}
            />
          </Col>
        </Row>
        <Row gutter={[7, 7]}>
          <Col span={9}>
            <Card style={{ height: 200 }}>
              <Descriptions title="บัญชี">
                <Descriptions.Item label="ชื่อบัญชี">
                  ชาญศิลป์ ทองคำ
                </Descriptions.Item>
                <Descriptions.Item label="หมายเลขบัญชี">
                  0910110111
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col span={9}>
            <Card style={{ height: 200 }}>
              <Empty
                image="https://cdn4.iconfinder.com/data/icons/credit-card-payments/48/79-512.png"
                imageStyle={{
                  height: 60,
                }}
                description={<span>เพิ่มบัตรเดบิต</span>}>
                <Button type="primary">Create Now</Button>
              </Empty>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}
export default MainContainer
