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
  const { Field } = Form
  return (
    <div className="form-wrapper">
      <Form>
        <Title level={3}>ลงทะเบียนสำหรับการกู้เงิน</Title>
        <Paragraph>
          มีบัญชีอยู่แล้ว?{' '}
          <Link href="/login">
            <a>ล็อกอิน</a>
          </Link>
        </Paragraph>
        <Field>
          <label>อีเมล</label>
          <input placeholder="อีเมล" />
        </Field>

        <Field>
          <label>ชื่อ (ภาษาไทย)</label>
          <input placeholder="ชื่อ" />
        </Field>

        <Field>
          <label>นามสกุล (ภาษาไทย)</label>
          <input placeholder="นามสกุล" />
        </Field>
        <Field>
          <label>เบอร์โทรศัพท์</label>
          <input placeholder="เบอร์โทรศัพท์" />
        </Field>
        <Field>
          <label>รหัสผ่าน</label>
          <input placeholder="รหัสผ่าน" type="password" />
        </Field>
        <Field>
          <label>ยืนยันหัสผ่าน</label>
          <input
            placeholder="ยืนยันรหัสผ่าน"
            type="password"
          />
        </Field>
        <Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Field>
        <Link href="/login">
          <a>
            <Button type="submit">ต่อไป</Button>
          </a>
        </Link>
      </Form>
    </div>
  )
}

export default RegisterLoanForm
