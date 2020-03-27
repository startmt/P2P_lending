import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
import VerifySCBData from '../components/VerifySCBData'

const RegisterLoanContainer = () => {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <Row>
            <Col span={24} className="border">
              <VerifySCBData />
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  )
}
export default RegisterLoanContainer
