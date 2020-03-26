import React, { useContext } from 'react'
import { Modal, Button, Skeleton } from 'antd'
import { connect } from 'react-redux'
import { adminAction } from '../../modules/admin/actions'
import { bindActionCreators } from 'redux'

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
      <Skeleton loading={initRequestData.get('loading')} >
        <p>
          หัวข้อ :{initRequestData.getIn(['data', 'title'])}
        </p>
        <p>
          ดอกเบี้ย :
          {initRequestData.getIn(['data', 'interestRate'])}
        </p>
        <p>
          จำนวนงวด :
          {initRequestData.getIn(['data', 'loanTenor'])}
        </p>
        <p>
          จำนวนเงิน :
          {initRequestData.getIn(['data', 'amount'])}
        </p>
        <p>
          รายละเอียด :
          {initRequestData.getIn(['data', 'description'])}
        </p>
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
