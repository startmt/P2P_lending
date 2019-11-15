import React from 'react'
import {
  Row,
  Col,
  Empty,
  Card,
  Button,
  Descriptions,
} from 'antd'
import ProfileCard from '~/components/ProfileCard'
const MainContainer = (props) => {
  return (
    <section className="section">
      <div className="container">
        <Row gutter={[0, 7]}>
          <Col span={18}>
           <ProfileCard/>
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
                description={
                  <span>
                    เพิ่มบัตรเดบิต
                  </span>
                }>
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
