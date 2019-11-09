import React, { Fragment } from 'react'
import {
  Typography,
  Row,
  Col,
  Statistic,
  Card,
  Icon,
} from 'antd'
const MainContainer = (props) => {
  return (
    <section className="section">
      <div className="container">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<Icon type="arrow-up" />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<Icon type="arrow-down" />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}
export default MainContainer
