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
const LoginForm = () => {
  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
  const { Field } = Form
  return (
    <div className="form-register-loan">
      <Form>
        <div className="text-center">
          <Title type="primary" level={3}>เข้าสู่ระบบ</Title>
        </div>
        <Field>
          <label>อีเมล</label>
          <input placeholder="อีเมล" />
        </Field>
        <Field>
          <label>รหัสผ่าน</label>
          <input type="password" placeholder="รหัสผ่าน" />
        </Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default LoginForm
