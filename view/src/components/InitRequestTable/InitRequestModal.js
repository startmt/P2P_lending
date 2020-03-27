import React from 'react'
import { Modal, Button, Skeleton, Icon } from 'antd'
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

const { Field } = Form
const InitRequestModal = ({
  initRequestData,
  handleCancel,
}) => {
  const OkButton = () => {
    return (
      <Button type="default" onClick={handleCancel}>
        เสร็จสิ้น
      </Button>
    )
  }
  return (
    <Modal
      footer={<OkButton />}
      title="ใบคำร้องกู้เงิน"
      visible={initRequestData.get('open')}
      onCancel={handleCancel}>
      <Skeleton loading={initRequestData.get('loading')}>
        <Form>
          <Header as="h2">ผู้ใช้งาน</Header>
          <Field>
            <label>ชื่อ - นามสกุล</label>
            <Input
              disabled
              type="text"
              value={`${initRequestData.getIn([
                'data',
                'manner',
                'firstname',
              ])} ${initRequestData.getIn([
                'data',
                'manner',
                'lastname',
              ])}`}
            />
          </Field>
          <Field>
            <label>คะแนนความประพฤติ</label>
            <Input
              disabled
              type="text"
              value={initRequestData.getIn([
                'data',
                'manner',
                'score',
              ])}
            />
          </Field>
          <Header as="h2">สัญญาการกู้</Header>
          <Field>
            <label>หัวข้อ</label>
            <Input
              disabled
              type="text"
              value={initRequestData.getIn([
                'data',
                'title',
              ])}
            />
          </Field>
          <Field>
            <label>ดอกเบี้ย</label>
            <Input
              disabled
              type="text"
              value={initRequestData.getIn([
                'data',
                'interestRate',
              ])}
            />
          </Field>
          <Field>
            <label>จำนวนงวด</label>
            <Input
              disabled
              type="text"
              value={initRequestData.getIn([
                'data',
                'loanTenor',
              ])}
            />
          </Field>
          <Field>
            <label>จำนวนเงิน</label>
            <Input
              disabled
              type="text"
              value={initRequestData.getIn([
                'data',
                'amount',
              ])}
            />
          </Field>
          <Field>
            <label>รายละเอียด</label>
            <TextArea
              disabled
              value={initRequestData.getIn([
                'data',
                'description',
              ])}
              style={{ minHeight: 100 }}
            />
          </Field>
          <Header as="h2">เอกสาร</Header>
          <Grid>
            <Field>
              <Button
                type="primary"
                icon="download"
                className="ant-button">
                สลิปเงินเดือน
              </Button>
              <Button
                type="primary"
                icon="download"
                className="ant-button">
                รายการธุรกรรม
              </Button>
              <Button
                type="primary"
                icon="download"
                className="ant-button">
                บัตรประชาชน
              </Button>
              <Button
                type="primary"
                icon="download"
                className="ant-button">
                เครดิตบรูโร
              </Button>
            </Field>
          </Grid>
        </Form>
      </Skeleton>
    </Modal>
  )
}
const mapStateToProps = (state) => ({
  initRequestData: state.getIn([
    'admin',
    'adminInitRequestData',
  ]),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleCancel: adminAction.closeInitRequestModal,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitRequestModal)
