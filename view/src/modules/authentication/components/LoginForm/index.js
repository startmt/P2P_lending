import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import './styles.less'
import Link from 'next/link'
import { Typography } from 'antd'
import Input from '~/components/Input'
import ErrorMessage from '~components/ErrorMessage'
const { Title } = Typography
const LoginForm = ({
  handleLogin,
  isLoading,
  error,
  isError,
  setValues,
  handleSubmit,
  errors,
}) => {
  const { Field } = Form
  return (
    <div className="form-register-loan">
      <Form
        onSubmit={handleSubmit(handleLogin)}
        error={isError}>
        <div className="text-center">
          <Title type="primary" level={3}>
            เข้าสู่ระบบ
          </Title>
        </div>
        <Field>
          <label>ชื่อผู้ใช้งาน</label>
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
        </Field>
        <Field>
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
        </Field>
        <Message error header="Error" content={error} />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default LoginForm
