import React from 'react'
import {
  Button,
  Checkbox,
  Form,
  Select,
} from 'semantic-ui-react'
import './styles.less'
import Link from 'next/link'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography
const RegisterLoanForm = () => {
  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
  const { Field } = Form
  return (
    <div className="form-register-loan">
      <Form>
        <Title level={3}>ลงทะเบียนสำหรับการกู้เงิน</Title>
        <Paragraph>
          มีบัญชีอยู่แล้ว? <Link>ล็อกอิน</Link>
        </Paragraph>
        <Field>
          <label>อีเมล</label>
          <input placeholder="อีเมล" />
        </Field>
        <Field>
          <label>เบอร์โทรศัพท์</label>
          <input placeholder="เบอร์โทรศัพท์" />
        </Field>
        <Field
          control={Select}
          label="คุณต้องการกู้เงินไปทำอะไร"
          options={options}
          placeholder="กรุณาเลือก"
        />
        <Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default RegisterLoanForm
