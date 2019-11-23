import React, { Fragment } from 'react'
import {
  Typography,
  Row,
  Col,
  Statistic,
  Card,
  Icon,
} from 'antd'
import DashboardCard from '../components/CardDashboard'
const MainContainer = (props) => {
  return (
    <section className="section">
      <div className="container">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <DashboardCard title={'Hello'} value={1234} />
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
