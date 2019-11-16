import React, { Fragment } from 'react'
import { Modal, Form } from 'semantic-ui-react'
import { Typography, Button, Steps } from 'antd'
import './styles.less'
import QrcodeGenarator from 'qrcode-generator'
const { Step } = Steps
const { Title } = Typography
const QrcodeModal = ({ step, prev, next, handleOtp }) => {
  const qr = QrcodeGenarator(4, 'L')
  qr.addData(
    'scbeasysim://login/f6822de7-17f7-4780-bb9b-2b7c7a044b4d',
  )
  qr.make()
  const qrcodeImg = qr.createDataURL()
  return (
    <Modal trigger={<Button>ยืนยันตัวตน</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Steps size="small" current={step}>
            <Step title="SCBEasy" />
            <Step title="OTP" />
            <Step title="ยืนยันข้อมูล" />
          </Steps>

          {(step === 0 && (
            <div className="text-center">
              <Title
                className="text-center"
                type="primary"
                level={4}>
                กรุณาแสกน QRCode
              </Title>
              <img
                src={qrcodeImg}
                width="200"
                height="200"
              />
            </div>
          )) ||
            (step === 1 && (
              <Fragment>
                <Title
                  className="text-center"
                  type="primary"
                  level={4}>
                  กรุณากรอกเลขที่ได้รับ
                </Title>
                <Form>
                  <Form.Field>
                    <input placeholder="รหัส OTP" />
                  </Form.Field>
                </Form>
              </Fragment>
            )) ||
            (step === 2 && (
              <Title
                className="text-center"
                type="primary"
                level={4}>
                กรุณาสแกน QRCode ผ่านโทรศัพท์ 2
              </Title>
            ))}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {step === 1 && (
          <Button onClick={prev}>ย้อนกลับ</Button>
        )}
        {step === 0 && <Button onClick={next}>ถัดไป</Button>}
        {step === 1 && <Button onClick={handleOtp}>ยืนยัน</Button>}
      </Modal.Actions>
    </Modal>
  )
}
export default QrcodeModal
