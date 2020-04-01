import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, Form } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { Button } from 'antd'
import useForm from 'react-hook-form'
import './styles.less'
import InputComp from '../../components/Input'
import ErrorMessage from '~components/ErrorMessage'
import { interestAction } from '../../modules/query/actions'
const AdminInterestForm = (props) => {
  const { interestData, setInterest, changeLoading } = props
  const {
    register,
    handleSubmit,
    errors,
    triggerValidation,
    setValue,
  } = useForm()
  register(
    { name: 'interest' },
    { required: 'กรุณากรอกฟิลด์นี้' },
  )
  register(
    { name: 'fee' },
    { required: 'กรุณากรอกฟิลด์นี้' },
  )
  useEffect(() => {
    register(
      { name: 'interest' },
      { required: 'กรุณากรอกฟิลด์นี้' },
    )
    register(
      { name: 'fee' },
      { required: 'กรุณากรอกฟิลด์นี้' },
    )
    setValue('interest', interestData.get('interest'))
    setValue('fee', interestData.get('fee'))
  }, [])
  const onSubmit = handleSubmit(async (value) => {
    setInterest({ ...value })
  })
  const handleChange = async (e, { name, value }) => {
    setValue(name, value)
    await triggerValidation({ name })
  }
  return (
    <Form>
      <Grid>
        <Grid.Column computer={8}>
          <Form.Field>
            <label>อัตราดอกเบี้ย (เปอร์เซนต์)</label>
            <InputComp
              defaultValue={interestData.get('interest')}
              name="interest"
              type="number"
              onChange={handleChange}
              error={!!errors.interest}
              disabled={
                interestData.get('changeLoading') || false
              }
            />
            <ErrorMessage
              text={
                errors.interest && errors.interest.message
              }
            />
          </Form.Field>
        </Grid.Column>

        <Grid.Column computer={8}>
          <Form.Field
            defaultValue={interestData.get('fee')}>
            <label>ค่าธรรมเนียม (เปอร์เซนต์)</label>
            <InputComp
              defaultValue={interestData.get('fee')}
              type="number"
              name="fee"
              onChange={handleChange}
              error={!!errors.fee}
              disabled={
                interestData.get('changeLoading') || false
              }
            />
            <ErrorMessage
              text={errors.fee && errors.fee.message}
            />
          </Form.Field>
        </Grid.Column>
      </Grid>
      <Grid>
        <div className="interest-right">
          <Button
            className="ant-button"
            type="submit"
            onClick={onSubmit}
            loading={
              interestData.get('changeLoading') || false
            }>
            ยืนยัน
          </Button>
        </div>
      </Grid>
    </Form>
  )
}

const mapStateToProps = (state, props) => ({
  interestData: state.getIn(['page', 'interest']),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { setInterest: interestAction.setInterestData },
    dispatch,
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminInterestForm)
