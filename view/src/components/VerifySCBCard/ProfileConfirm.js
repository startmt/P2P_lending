import React, { Fragment } from 'react'
import Input from '~/components/Input'
import { Form } from 'semantic-ui-react'
import { Typography } from 'antd'
import ErrorMessage from '~/components/ErrorMessage'
const { Title } = Typography
const ProfileConfirm = ({
  setProfileValues,
  profileFormErrors,
}) => (
  <Fragment>
    <Title className="text-center" type="primary" level={4}>
      กรุณากรอกข้อมูลยืนยัน
    </Title>
    <Form>
      <Form.Field>
        <Input
          placeholder="ชื่อ (ภาษาไทย)"
          type="text"
          name="firstname"
          onChange={setProfileValues}
          error={profileFormErrors.firstname ? true : false}
        />
        <ErrorMessage
          text={
            profileFormErrors.firstname &&
            profileFormErrors.firstname.message
          }
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="นามสกุล (ภาษาไทย)"
          type="text"
          name="lastname"
          onChange={setProfileValues}
          error={profileFormErrors.lastname ? true : false}
        />
        <ErrorMessage
          text={
            profileFormErrors.lastname &&
            profileFormErrors.lastname.message
          }
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="เลขบัตรประชาชน"
          type="text"
          name="citizenId"
          onChange={setProfileValues}
          error={profileFormErrors.citizenId ? true : false}
        />
        <ErrorMessage
          text={
            profileFormErrors.citizenId &&
            profileFormErrors.citizenId.message
          }
        />
      </Form.Field>
    </Form>
  </Fragment>
)

export default ProfileConfirm
