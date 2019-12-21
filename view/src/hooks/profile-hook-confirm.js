import { useEffect } from 'react'
import useForm from 'react-hook-form'
export const useQrcodeConfirm = () => {
  const {
    register,
    errors,
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

  const setValues = async (e, { name, value }) => {
    setValue(name, value)
    await triggerValidation({ name })
  }
  return {
    setValues,
    errors,
    handleOtpSubmit,
  }
}
