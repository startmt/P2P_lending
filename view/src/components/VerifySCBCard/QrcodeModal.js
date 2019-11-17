import React, { Fragment } from 'react'
import { Modal, Form } from 'semantic-ui-react'
import { Typography, Button, Steps } from 'antd'
import './styles.less'
import PropTypes from 'prop-types'
import QrcodeGenarator from 'qrcode-generator'
const { Step } = Steps
const { Title } = Typography
const QrcodeModal = ({
  step,
  prev,
  next,
  handleOtp,
  otpCode,
  setOtp,
  firstname,
  lastname,
  citizenId,
  setFirstname,
  setLastname,
  setCitizenId,
}) => {
  const qr = QrcodeGenarator(4, 'L')
  qr.addData(
    'scbeasysim://login/3023494f-f61d-48ff-aa95-52847b58778c',
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
                  กรุณากรอกข้อมูลยืนยัน
                </Title>
                <Form>
                  <Form.Field>
                    <input
                      placeholder="ชื่อ (ภาษาไทย)"
                      value={firstname}
                      onChange={(e) =>
                        setFirstname(e.target.value)
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <input
                      placeholder="นามสกุล (ภาษาไทย)"
                      value={lastname}
                      onChange={(e) =>
                        setLastname(e.target.value)
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <input
                      placeholder="เลขบัตรประชาชน"
                      value={citizenId}
                      maxLength={13}
                      onChange={(e) =>
                        setCitizenId(e.target.value)
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <input
                      placeholder="รหัส OTP"
                      value={otpCode}
                      maxLength={6}
                      onChange={(e) =>
                        setOtp(e.target.value)
                      }
                    />
                  </Form.Field>
                </Form>
              </Fragment>
            ))}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {step === 1 && (
          <Button onClick={prev}>ย้อนกลับ</Button>
        )}
        {step === 0 && (
          <Button onClick={next}>ถัดไป</Button>
        )}
        {step === 1 && (
          <Button onClick={handleOtp}>ยืนยัน</Button>
        )}
      </Modal.Actions>
    </Modal>
  )
}

QrcodeModal.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  step: PropTypes.number,
  handleOtp: PropTypes.func,
  otpCode: PropTypes.string,
  setOtp: PropTypes.func,
}
export default QrcodeModal
