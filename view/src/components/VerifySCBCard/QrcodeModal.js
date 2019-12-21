import React, { Fragment } from 'react'
import { Modal, Form } from 'semantic-ui-react'
import { Typography, Button, Steps } from 'antd'
import Input from '~/components/Input'
import './styles.less'
import PropTypes from 'prop-types'
import ErrorMessage from '~/components/ErrorMessage'
import QrcodeGenarator from 'qrcode-generator'
import { useQrcodeConfirm } from '../../hooks/profile-hook-confirm'
const { Step } = Steps
const { Title } = Typography
const QrcodeModal = ({
  step,
  prev,
  next,
  firstname,
  lastname,
  handleOtp,
  citizenId,
  setFirstname,
  setLastname,
  setCitizenId,
  handleConfirm,
  qrCode,
}) => {
  const {
    setValues,
    handleOtpSubmit,
    errors,
  } = useQrcodeConfirm()
  const qr = QrcodeGenarator(4, 'L')
  qr.addData(qrCode)
  qr.make()
  const qrcodeImg = qr.createDataURL()
  return (
    <Modal trigger={<Button>ยืนยันตัวตน</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Steps size="small" current={step}>
            <Step title="SCBEasy" />
            <Step title="OTP" />
            <Step title="Confirm" />
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
                    <Input
                      placeholder="รหัส OTP"
                      type="text"
                      name="otp"
                      maxLength={6}
                      onChange={setValues}
                      error={errors.otp ? true : false}
                    />
                    <ErrorMessage
                      text={
                        errors.otp && errors.otp.message
                      }
                    />
                  </Form.Field>
                </Form>
              </Fragment>
            )) ||
            (step === 2 && (
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
          <Button onClick={handleOtpSubmit(handleOtp)}>
            ยืนยัน
          </Button>
        )}
        {step === 2 && (
          <Button onClick={handleConfirm}>เสร็จสิ้น</Button>
        )}
      </Modal.Actions>
    </Modal>
  )
}

QrcodeModal.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  step: PropTypes.number,
}
export default QrcodeModal
