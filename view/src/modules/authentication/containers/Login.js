import React, { Fragment } from 'react'
import { Typography, Row, Col } from 'antd'
import LoginForm from '../components/LoginForm'
const LoginContainer = (props) => {
  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <Row>
            <Col span={24} >
              <LoginForm />
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  )
}
export default LoginContainer
