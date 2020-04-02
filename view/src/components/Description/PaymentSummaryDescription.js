import React, { Fragment } from 'react'
import { Descriptions, Button } from 'antd'
import BankMenu from '../BankMenu/BankMenu'
import { Form } from 'semantic-ui-react'
const UserDescription = ({ title }) => {
  return (
    <Fragment>
      <Descriptions
        column={{
          xxl: 2,
          xl: 2,
          lg: 2,
          md: 2,
          sm: 1,
          xs: 1,
        }}
        title={title}>
        <Descriptions.Item label="จำนวนเงินที่ชำระ">
          20000 บาท
        </Descriptions.Item>
      </Descriptions>
      <Form>
        <Form.Field>
          <label>กรุณาเลือกธนาคาร</label>
          <BankMenu />
        </Form.Field>
        <Button type="primary">ถัดไป</Button>
      </Form>
    </Fragment>
  )
}

export default UserDescription
