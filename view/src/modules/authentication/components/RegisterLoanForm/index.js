import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import './styles.less'
import Link from 'next/link'
import Input from '~/components/Input'
import { Select } from 'semantic-ui-react'
import { Typography } from 'antd'
import ErrorMessage from '~/components/ErrorMessage'
const { Title, Paragraph } = Typography
const RegisterForm = ({
  handleRegister,
  isLoading,
  error,
  isError,
  setValues,
  handleSubmit,
  errors,
}) => {
  const roleOptions = [
    {
      key: 'borrower',
      value: 'borrower',
      text: 'ผู้ขอสินเชื่อ',
    },
    {
      key: 'lender',
      value: 'lender',
      text: 'ผู้ให้สินเชื่อ',
    },
  ]
  return (
    <div className="form-wrapper">
      <Form
        onSubmit={handleSubmit(handleRegister)}
        error={isError}>
        <Title level={3}>ลงทะเบียนสมาชิก</Title>
        <Paragraph>
          มีบัญชีอยู่แล้ว?{' '}
          <Link href="/login">
            <a>ล็อกอิน</a>
          </Link>
        </Paragraph>
        <Form.Field>
          <label>ชื่อผุ้ใช้งาน</label>
          <Input
            disable={isLoading}
            name="username"
            type="text"
            placeholder="ชื่อผู้ใช้งาน"
            onChange={setValues}
            error={errors.username ? true : false}
          />
          <ErrorMessage
            text={
              errors.username && errors.username.message
            }
          />
        </Form.Field>
        <Form.Field>
          <label>รหัสผ่าน</label>
          <Input
            disable={isLoading}
            name="password"
            type="password"
            placeholder="รหัสผ่าน"
            onChange={setValues}
            error={errors.password ? true : false}
          />
          <ErrorMessage
            text={
              errors.password && errors.password.message
            }
          />
        </Form.Field>
        <Form.Field>
          <label>ยืนยันรหัสผ่าน</label>
          <Input
            disable={isLoading}
            name="repassword"
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            onChange={setValues}
            error={errors.repassword ? true : false}
          />
          <ErrorMessage
            text={
              errors.repassword && errors.repassword.message
            }
          />
        </Form.Field>
        <Form.Field>
          <label>ตำแหน่ง</label>
          <Select
            name="role"
            placeholder="กรุณาเลือกตำแหน่ง"
            options={roleOptions}
            error={errors.role ? true : false}
            onChange={setValues}
          />
          <ErrorMessage
            text={
              errors.role && errors.role.message
            }
          />
        </Form.Field>
        <Message error header="Error" content={error} />
        <Button
          loading={isLoading}
          disabled={isLoading}
          type="submit">
          สมัครสมาชิก
        </Button>
      </Form>
    </div>
  )
}

export default RegisterForm
