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
import ClueCard from './ClueCard'
import { Map } from 'immutable'

const { Field } = Form
const InitRequestModal = ({
  initRequestData,
  handleCancel,
}) => {
  const files =
    initRequestData.getIn(['data', 'files']) || Map({})
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
            {files.get('identify') && (
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={8}>
                <Field>
                  <ClueCard
                    description="บัตรประชาชน"
                    icon="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-id-512.png"
                    fileUrl={files.getIn([
                      'identify',
                      0,
                      'fileUrl',
                    ])}
                  />
                </Field>
              </Grid.Column>
            )}

            {files.get('credit') && (
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={8}>
                <Field>
                  <ClueCard
                    description="เครดิตบรูโร"
                    icon="https://cdn1.iconfinder.com/data/icons/hawcons/32/699603-icon-94-document-file-doc-512.png"
                    fileUrl={files.getIn([
                      'credit',
                      0,
                      'fileUrl',
                    ])}
                  />
                </Field>
              </Grid.Column>
            )}
            {files.get('bankstatement') && (
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={8}>
                <Field>
                  <ClueCard
                    fileUrl={files.getIn([
                      'bankstatement',
                      0,
                      'fileUrl',
                    ])}
                    description="รายการบัญชี"
                    icon="https://cdn4.iconfinder.com/data/icons/finance-and-banking-free/64/Finance_bank_check-512.png"
                  />
                </Field>
              </Grid.Column>
            )}
            {files.get('salary') && (
              <Grid.Column
                mobile={16}
                tablet={8}
                computer={8}>
                <Field>
                  <ClueCard
                    fileUrl={files.getIn([
                      'salary',
                      0,
                      'fileUrl',
                    ])}
                    description="สลิปเงินเดือน"
                    icon="https://cdn0.iconfinder.com/data/icons/finance-4-6/512/finance-money-dollar-40-512.png"
                  />
                </Field>
              </Grid.Column>
            )}
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
