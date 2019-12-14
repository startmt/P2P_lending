import React, { Fragment, useEffect } from 'react'
import { Row, Col } from 'antd'
import Banner from '~/components/Banner/Banner'
import RegisterLoanForm from '../components/RegisterLoanForm'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import useForm from 'react-hook-form'
import { connect } from 'react-redux'
import { registerAction } from '../actions'
import { registerSelector } from '../selectors'
export const formName = 'formCreatePassword'
const RegisterLoanContainer = ({
  registerFunction,
  isLoading,
  error,
  isError,
  resetState,
}) => {
  const handleRegister = (values) => {
    const role = 'borrower'
    registerFunction(values.username, values.password, role)
  }
  const {
    handleSubmit,
    register,
    errors,
    watch,
    setValue,
    triggerValidation,
  } = useForm()

  useEffect(() => {
    register(
      { name: 'username' },
      {
        minLength: {
          value: 8,
          message: 'กรุณากรอกผู้ใช้งานมากกว่า 8 ตัว',
        },
        required: 'กรุณากรอกชื่อผู้ใช้งาน',
      },
    )
    register(
      { name: 'password' },
      {
        minLength: {
          value: 8,
          message: 'กรุณากรอกรหัสผ่านมากกว่า 8 ตัว',
        },
        required: 'กรุณากรอกรหัสผ่าน',
      },
    )
    register(
      { name: 'repassword' },
      {
        validate: (value) => {
          return (
            value === watch('password') ||
            'กรุณากรอก Password ให้ตรงกัน'
          )
        },
        required: ' ',
      },
    )
  }, [])
  useEffect(() => {
    return () => {
      resetState()
    }
  }, [])
  const setValues = async (e, { name, value }) => {
    setValue(name, value)
    await triggerValidation({ name })
  }
  return (
    <Fragment>
      <Banner
        background="https://image.freepik.com/free-photo/business-adviser-analyzing-financial-figures-denoting-progress-work-company_1423-97.jpg"
        title="สมัครการกู้เงิน"
      />
      <section className="section">
        <div className="container">
          <Row>
            <Col span={24}>
              <RegisterLoanForm
                handleRegister={handleRegister}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                errors={errors}
                error={error}
                isError={isError}
                setValues={setValues}
              />
            </Col>
          </Row>
        </div>
      </section>
    </Fragment>
  )
}

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    isLoading: registerSelector.isLoading,
    error: registerSelector.getError,
    isError: registerSelector.isError,
  })(state, props)
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      registerFunction: registerAction.register,
      resetState: registerAction.resetState,
    },
    dispatch,
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterLoanContainer)
