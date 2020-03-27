import { useEffect } from 'react'
import useForm from 'react-hook-form'
export const useQrcodeConfirm = () => {
  const {
    register,
    errors: otpErrors,
    handleSubmit: handleOtpSubmit,
    setValue,
    triggerValidation,
  } = useForm()
  useEffect(() => {
    register(
      { name: 'otp' },
      {
        minLength: {
          value: 6,
          message: 'กรุณากรอกรหัส OTP 6 ตัว',
        },
        required: 'กรุณากรอกรหัส OTP',
      },
    )
  }, [])

  const setOtpValues = async (e, { name, value }) => {
    setValue(name, value)
    await triggerValidation({ name })
  }
  return {
    setOtpValues,
    otpErrors,
    handleOtpSubmit,
  }
}

export const useProfileConfirm = () => {
  const {
    register,
    errors: profileFormErrors,
    handleSubmit: handleProfileSubmit,
    setValue,
    triggerValidation,
  } = useForm()
  useEffect(() => {
    register(
      { name: 'firstname' },
      {
        required: 'กรุณากรอกชื่อจริง',
      },
    )
    register(
      { name: 'lastname' },
      {
        required: 'กรุณากรอกรหัสนามสกุล',
      },
    )
    register(
      { name: 'citizenId' },
      {
        required: 'กรุณากรอกรหัสหมายเลขบัตรประชาชน',
      },
    )
  }, [])

  const setProfileValues = async (e, { name, value }) => {
    setValue(name, value)
    await triggerValidation({ name })
  }
  return {
    setProfileValues,
    profileFormErrors,
    handleProfileSubmit,
  }
}
