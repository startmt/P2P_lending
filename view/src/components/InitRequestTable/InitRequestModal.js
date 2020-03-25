import React, { useContext } from 'react'
import { Modal } from 'antd'
import { connect } from 'react-redux'
import { adminAction } from '../../modules/admin/actions'
import { bindActionCreators } from 'redux'
const InitRequestModal = ({
  initRequestData,
  handleOk,
  handleCancel,
}) => {
  return (
    <Modal
      title="Title"
      visible={initRequestData.get('open')}
      onOk={() => {
        handleOk(
          initRequestData.getIn(['data', 'id']),
          'APPROVE_INIT',
        )
      }}
      onCancel={handleCancel}></Modal>
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
      handleOk: adminAction.confirmRequest,
      handleCancel: adminAction.closeInitRequestModal,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitRequestModal)
