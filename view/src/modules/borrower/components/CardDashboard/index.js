import React from 'react'
import { Card, Statistic, Icon } from 'antd'
import './style.less'
const CardDashboard = ({ title, value }) => (
  <Card>
    <Statistic
      title={title}
      value={value}
      precision={2}
      valueStyle={{ color: '#3f8600' }}
      prefix={<Icon type="arrow-up" />}
      suffix="%"
    />
  </Card>
)

export default CardDashboard
