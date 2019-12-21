import React, { Fragment } from 'react'
import Input from '~/components/Input'
import { Form } from 'semantic-ui-react'
import { Typography } from 'antd'
import ErrorMessage from '~/components/ErrorMessage'
const { Title } = Typography
const OtpConfirm = ({ setOtpValues, otpErrors }) => (
  <Fragment>
    <Title className="text-center" type="primary" level={4}>
      กรุณากรอกข้อมูลยืนยัน
    </Title>
    <Form>
      <Form.Field>
        <Input
          placeholder="รหัส OTP"
          type="text"
          name="otp"
          maxLength={6}
          onChange={setOtpValues}
          error={otpErrors.otp ? true : false}
        />
        <ErrorMessage
          text={otpErrors.otp && otpErrors.otp.message}
        />
      </Form.Field>
    </Form>
  </Fragment>
)

export default OtpConfirm
