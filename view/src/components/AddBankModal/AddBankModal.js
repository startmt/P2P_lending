import React, { useEffect } from 'react'
import { Modal } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { bankAction } from '../../modules/borrower/actions'
import Input from '../Input'
import { Form } from 'semantic-ui-react'
import BankMenu from '../BankMenu/BankMenu'
import useForm from 'react-hook-form'
const AddBankModal = ({
  loading,
  open,
  handleCancel,
  handleAddBank,
}) => {
  const {
    register,
    setValue,
    triggerValidation,
    errors,
    handleSubmit,
  } = useForm()
  useEffect(() => {
    register(
      { name: 'bank_code' },
      { required: 'กรุณาเลือกธนาคาร' },
    )
    register(
      { name: 'name' },
      { required: 'กรุณากรอกชื่อบัญชี' },
    )
    register(
      { name: 'number' },
      { required: 'กรุณากรอกรหัสบัญชี' },
    )
  }, [])
  const onSubmit = handleSubmit((data) => {
    handleAddBank(data)
  })
  const setValues = async (e, { name, value }) => {
    setValue(name, value)
    await triggerValidation({ name })
  }
  const setbank = async (value) => {
    setValue('bank_code', value.key)
    await triggerValidation({ name })
  }
  return (
    <Modal
      title="เพิ่มบัญชีธนาคาร"
      onCancel={handleCancel}
      onOk={onSubmit}
      confirmLoading={loading}
      visible={open}>
      <Form>
        <Form.Field>
          <label>ชื่อบัญชี</label>
          <Input
            disable={loading}
            name="name"
            type="text"
            placeholder="ชื่อบัญชี"
            onChange={setValues}
            error={errors.repassword ? true : false}
          />
        </Form.Field>
        <Form.Field>
          <label>หมายเลขบัญชี</label>
          <Input
            disable={loading}
            name="number"
            type="text"
            placeholder="0124546848"
            onChange={setValues}
            error={errors.repassword ? true : false}
          />
        </Form.Field>
        <Form.Field>
          <label>ธนาคาร</label>
          <BankMenu
            error={errors.bank_code ? true : false}
            setData={setbank}
            disable={loading}
          />
        </Form.Field>
      </Form>
    </Modal>
  )
}
const mapStateToProps = (state) => ({
  loading: state.getIn(['lending', 'bank', 'loadingAdd']),
  open: state.getIn(['lending', 'bank', 'openModalAdd']),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleCancel: bankAction.closeAddBankModal,
      handleAddBank: bankAction.addBank,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBankModal)
