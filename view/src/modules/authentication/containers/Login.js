import React, { Fragment, useEffect } from 'react'
import { Row, Col } from 'antd'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { loginAction } from '../actions'
import { loginSelector } from '../selectors'
import useForm from 'react-hook-form'
import { Form, Icon, Input, Button } from 'antd'

const useResetState = (dispatchFn) => {
  useEffect(() => {
    return () => {
      console.log('UNMOUNTED')
      dispatchFn()
    }
  }, [])
}

const LoginContainer = ({
  isLoading,
  error,
  isError,
  loginFunction,
  resetState,
}) => {
  const {
    handleSubmit,
    register,
    errors,
    setValue,
    triggerValidation,
  } = useForm()
  useResetState(resetState)
  const setValues = async (e, { name, value }) => {
    setValue(name, value)
    await triggerValidation({ name })
  }
  const handleLogin = (values) => {
    const role = 'borrower'
    loginFunction(values.username, values.password, role)
  }
  useEffect(() => {
    register(
      { name: 'username' },
      {
        required: 'กรุณากรอกชื่อผู้ใช้งาน',
      },
    )
    register(
      { name: 'password' },
      {
        required: 'กรุณากรอกรหัสผ่าน',
      },
    )
  }, [])

  return (
    <Fragment>
      <section className="section">
        <div className="container">
          <Row>
            <Col span={24}>
              <LoginForm
                handleLogin={handleLogin}
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
    isLoading: loginSelector.isLoading,
    error: loginSelector.getError,
    isError: loginSelector.isError,
  })(state, props)
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loginFunction: loginAction.login,
      resetState: loginAction.resetState,
    },
    dispatch,
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer)
