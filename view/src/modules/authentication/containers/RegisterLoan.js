import React, { Fragment } from 'react'
import { Typography, Row, Col } from 'antd'
import Banner from '~/components/Banner/Banner'
import RegisterLoanForm from '../components/RegisterLoanForm'
const RegisterLoanContainer = (props) => {
  return (
    <Fragment>
      <Banner
        background="https://image.freepik.com/free-photo/business-adviser-analyzing-financial-figures-denoting-progress-work-company_1423-97.jpg"
        title="สมัครการกู้เงิน"
      />
      <section className="section">
        <div className="container">
          <Row>
            <Col span={24} >
              <RegisterLoanForm />
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  )
}
export default RegisterLoanContainer
