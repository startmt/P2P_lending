import React, { useEffect, Fragment, useState } from 'react'
import { Modal, Button } from 'antd'
import { connect } from 'react-redux'
import { createLendingAction } from '../../modules/event'
import { bindActionCreators } from 'redux'
import useForm from 'react-hook-form'
import ClueCard from './ClueCard'
import {
  Grid,
  Form,
  Input,
  TextArea,
} from 'semantic-ui-react'
import CategorySelect from '../CategorySelect/CategorySelect'
import { TenorSelect } from '../TenorSelect'
const CreateLendingModal = ({
  createLending,
  handleOpen,
  handleClose,
  open,
  loading,
  role,
  isIdentify,
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
      { name: 'title' },
      { required: 'กรุณากรอกชื่อบัญชี' },
    )
    register(
      { name: 'amount' },
      { required: 'กรุณากรอกรหัสบัญชี' },
    )
    register(
      { name: 'description' },
      { required: 'กรุณากรอกรหัสบัญชี' },
    )
    register(
      { name: 'loanTenor' },
      { required: 'กรุณากรอกรหัสบัญชี' },
    )
    register(
      { name: 'category' },
      { required: 'กรุณากรอกรหัสบัญชี' },
    )
    register(
      { name: 'credit' },
      { required: 'กรุณากรอกรหัสบัญชี' },
    )
    register({ name: 'salary' })
    register({ name: 'bankstatement' })
    register(
      { name: 'identify' },
      { required: 'กรุณากรอกรหัสบัญชี' },
    )
  }, [])
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }
  const [identifyImg, setIdentifyImg] = useState(null)
  const [creditImg, setCreditImg] = useState(null)
  const [salaryImg, setSalaryImg] = useState(null)
  const [bankstatementImg, setBankstatementImg] = useState(
    null,
  )
  const onClose = () => {
    handleClose()
    document.getElementById('create-form').reset()
  }
  const onSubmit = handleSubmit(async (data) => {
    await createLending(data)
    document.getElementById('create-form').reset()
  })
  const setValues = async (e, { name, value }) => {
    setValue(name, value)
    await triggerValidation({ name })
  }
  const setFile = async (name, value) => {
    switch (name) {
      case 'identify':
        setIdentifyImg(await getBase64(value))
        break
      case 'credit':
        setCreditImg(await getBase64(value))
        break
      case 'salary':
        setSalaryImg(await getBase64(value))
        break
      case 'bankstatement':
        setBankstatementImg(await getBase64(value))
        break
    }
    setValue(name, value)
    await triggerValidation({ name })
  }
  const handleCategory = async (value) => {
    setValue('category', value.key)
    await triggerValidation({ name: 'category' })
  }
  const handleTenor = async (value) => {
    setValue('loanTenor', value.key)
    await triggerValidation({ name: 'loanTenor' })
  }

  return (
    <Fragment>
      <Modal
        title="สร้างใบคำร้อง"
        onCancel={onClose}
        width={800}
        confirmLoading={loading}
        onOk={onSubmit}
        visible={open}>
        <Form id="create-form" onSubmit={onSubmit}>
          <input type="reset" hidden />
          <Form.Field>
            <label>หัวข้อ</label>
            <Input name="title" onChange={setValues} />
          </Form.Field>
          <Form.Field>
            <label>ประเภท</label>
            <CategorySelect setData={handleCategory} />
          </Form.Field>
          <Form.Field>
            <label>รายละเอียด</label>
            <TextArea
              name="description"
              onChange={setValues}
            />
          </Form.Field>
          <Form.Field>
            <label>จำนวน</label>
            <Input
              name="amount"
              type="number"
              onChange={setValues}
            />
          </Form.Field>
          <Form.Field>
            <label>จำนวนงวด</label>
            <TenorSelect setData={handleTenor} />
          </Form.Field>
          <Grid>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}>
              <ClueCard
                description="บัตรประชาชน"
                icon={
                  identifyImg ||
                  'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-id-512.png'
                }
                handleFile={setFile}
                name="identify"
              />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}>
              <ClueCard
                description="เครดิตบรูโร"
                icon={
                  creditImg ||
                  'https://cdn1.iconfinder.com/data/icons/hawcons/32/699603-icon-94-document-file-doc-512.png'
                }
                handleFile={setFile}
                name="credit"
              />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}>
              <ClueCard
                description="สลิปเงินเดือน (ถ้ามี)"
                icon={
                  salaryImg ||
                  'https://cdn0.iconfinder.com/data/icons/finance-4-6/512/finance-money-dollar-40-512.png'
                }
                handleFile={setFile}
                name="salary"
              />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}>
              <ClueCard
                description="รายการดำเนินธุรกรรมทางบัญชี (ถ้ามี)"
                icon={
                  bankstatementImg ||
                  'https://cdn4.iconfinder.com/data/icons/finance-and-banking-free/64/Finance_bank_check-512.png'
                }
                handleFile={setFile}
                name="bankstatement"
              />
            </Grid.Column>
          </Grid>
        </Form>
      </Modal>
      {role === 'borrower' && isIdentify && (
        <Button
          type="dashed"
          loading={loading}
          onClick={handleOpen}>
          สร้างใบคำร้อง
        </Button>
      )}
    </Fragment>
  )
}
const mapStateToProps = (state) => ({
  loading: state.getIn([
    'event',
    'createLending',
    'loading',
  ]),
  open: state.getIn(['event', 'createLending', 'modal']),
  step: state.getIn(['event', 'createLending', 'step']),
  role: state.getIn(['authentication', 'auth', 'role']),
  isIdentify: state.getIn([
    'authentication',
    'auth',
    'isIdentify',
  ]),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      createLending: createLendingAction.createLending,
      handleOpen: createLendingAction.openModal,
      handleClose: createLendingAction.closeModal,
    },
    dispatch,
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateLendingModal)
