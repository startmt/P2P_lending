import React from 'react'
import { Modal, Button, Skeleton } from 'antd'
import { connect } from 'react-redux'
import { adminAction } from '../../modules/admin/actions'
import { bindActionCreators } from 'redux'
import Input from '../Input'
import {
  Form,
  TextArea,
  Header,
  Grid,
} from 'semantic-ui-react'
import { Map } from 'immutable'

const { Field } = Form
const LendingDataModal = ({
  data,
  handleCancel,
  open,
  loading,
}) => {
  const files = data.getIn(['data', 'files']) || Map({})
  const OkButton = () => {
    return (
      <Button type="default" onClick={handleCancel}>
        เสร็จสิ้น
      </Button>
    )
  }
  return (
    <Modal
      width={800}
      footer={<OkButton />}
      title="ใบคำร้องกู้เงิน"
      visible={open}
      onCancel={handleCancel}>
      <Skeleton loading={loading}>
        <Form>
          <Header as="h2">ผู้กู้</Header>
          <Field>
            <label>ชื่อ - นามสกุล</label>
            <Input
              disabled
              type="text"
              value={`${data.getIn([
                'manner',
                'firstname',
              ])} ${data.getIn(['manner', 'lastname'])}`}
            />
          </Field>
          <Field>
            <label>คะแนนความประพฤติ</label>
            <Input
              disabled
              type="text"
              value={data.getIn(['manner', 'score'])}
            />
          </Field>
          <Header as="h2">รายละเอียดการกู้</Header>
          <Field>
            <label>หัวข้อ</label>
            <Input
              disabled
              type="text"
              value={data.getIn(['data', 'title'])}
            />
          </Field>
          <Field>
            <label>ดอกเบี้ย</label>
            <Input
              disabled
              type="text"
              value={data.getIn(['data', 'interestRate'])}
            />
          </Field>
          <Field>
            <label>จำนวนงวด</label>
            <Input
              disabled
              type="text"
              value={data.getIn(['data', 'loanTenor'])}
            />
          </Field>
          <Field>
            <label>จำนวนเงิน</label>
            <Input
              disabled
              type="text"
              value={data.getIn(['data', 'amount'])}
            />
          </Field>
          <Field>
            <label>รายละเอียด</label>
            <TextArea
              disabled
              value={data.getIn(['data', 'description'])}
              style={{ minHeight: 100 }}
            />
          </Field>
        </Form>
      </Skeleton>
    </Modal>
  )
}
const mapStateToProps = (state) => ({
  loading: state.getIn([
    'lending',
    'lending',
    'loadingObj',
  ]),
  data: state.getIn(['lending', 'lending', 'dataById']),
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LendingDataModal)
