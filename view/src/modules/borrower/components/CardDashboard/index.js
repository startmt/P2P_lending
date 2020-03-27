import React from 'react'
import { Card, Icon, Typography, Skeleton } from 'antd'
import PropTypes from 'prop-types'
import './style.less'
const { Title, Paragraph } = Typography
const CardDashboard = ({
  title,
  value,
  icon,
  color,
  bgcolor,
  footer,
  loading,
}) => (
  <Card
    style={{ color: color, background: bgcolor }}
    className="h-100">
    <Skeleton loading={loading || false} active>
      <Title level={4} style={{ color: color }}>
        {title}
      </Title>
      <div className="d-flex justify-content-between align-items-center">
        <Title style={{ color: color }}>{value}</Title>
        <div>
          <Icon type={icon} style={{ fontSize: 75 }} />
        </div>
      </div>
      <p>{footer}</p>
    </Skeleton>
  </Card>
)

CardDashboard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  footer: PropTypes.string || PropTypes.element,
  loading: PropTypes.bool,
}

export default CardDashboard
