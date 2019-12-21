import React from 'react'
import { Modal } from 'semantic-ui-react'
import { Typography, Button, Steps } from 'antd'
import './styles.less'
import PropTypes from 'prop-types'
import QrcodeGenarator from 'qrcode-generator'
import {
  useQrcodeConfirm,
  useProfileConfirm,
} from '../../hooks/profile-hook-confirm'
import Otpconfirm from './Otpconfirm'
import ProfileConfirm from './ProfileConfirm'
const { Step } = Steps
const { Title } = Typography
const QrcodeModal = ({
  step,
  prev,
  next,
  handleOtp,
  handleConfirm,
  qrCode,
}) => {
  const {
    setOtpValues,
    handleOtpSubmit,
    otpErrors,
  } = useQrcodeConfirm()
  const {
    setProfileValues,
    handleProfileSubmit,
    profileFormErrors,
  } = useProfileConfirm()
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
              <Otpconfirm
                setOtpValues={setOtpValues}
                otpErrors={otpErrors}
              />
            )) ||
            (step === 2 && (
              <ProfileConfirm
                setProfileValues={setProfileValues}
                profileFormErrors={profileFormErrors}
              />
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
          <Button
            onClick={handleProfileSubmit(handleConfirm)}>
            เสร็จสิ้น
          </Button>
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
