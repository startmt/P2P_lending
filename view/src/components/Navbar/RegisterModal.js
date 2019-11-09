import React from 'react'
import { Modal } from 'semantic-ui-react'
import { Typography, Button } from 'antd'
import Link from 'next/link'
import './styles.less'
const { Title, Paragraph } = Typography
const RegisterModal = () => {
  return (
    <Modal trigger={<Button>เริ่มต้นใช้งาน</Button>}>
      <Modal.Content>
        <Modal.Description className="text-center">
          <Title type="primary" level={3}>
            เริ่มต้นใช้งาน
          </Title>
          <Link href="/register-loan">
            <Button type="primary">ผู้ขอสินเชื่อ</Button>
          </Link>
          <div class="my-3">
            <div class="row align-items-center">
              <div class="col">
                <div class="border-top h-0"></div>
              </div>
              <div class="col-auto small p-0">
                <strong>หรือ</strong>
              </div>
              <div class="col">
                <div class="border-top h-0"></div>
              </div>
            </div>
          </div>
          <Button>นักลงทุน</Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
export default RegisterModal
