import React from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
import { TextArea, Form, Message } from 'semantic-ui-react'
import ErrorMessage from '~/components/ErrorMessage'
const { Field } = Form
const RemarkCancelModal = ({
  handleCancel,
  handleSubmit,
  open,
  errors,
  onFormChange,
}) => {
  return (
    <Modal
      width={800}
      okText="ยืนยัน"
      onOk={handleSubmit}
      cancelText="ยกเลิก"
      title="ยกเลิกใบคำร้อง"
      visible={open}
      onCancel={handleCancel}>
      <Form>
        <Field>
          <label>หมายเหตุการยกเลิก</label>
          <TextArea name="remark" onChange={onFormChange} />
          <ErrorMessage
            text={
              (errors.remark && errors.remark.message) || ''
            }
          />
        </Field>
      </Form>
    </Modal>
  )
}
RemarkCancelModal.propTypes = {
  handleCancel: PropTypes.func,
  handleSubmit: PropTypes.func,
  open: PropTypes.bool,
  onFormChange: PropTypes.func,
  errors: PropTypes.any,
}
export default RemarkCancelModal
