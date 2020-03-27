import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
import OtpCard from '../components/OtpCard'

const OtpContainer = ({otpCode}) => {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <Row>
            <Col span={24} className="border">
              <OtpCard otpCode={otpCode} />
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  )
}
export default OtpContainer
