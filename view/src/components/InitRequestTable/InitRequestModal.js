import React, { useContext } from 'react'
import { Modal } from 'antd'
import { AdminRequestTableContext } from '../../context/AdminRequestTableContext'
const { confirm } = Modal
const InitRequestModal = () => {
  const {
    open,
    id,
    handleOk,
    handleCancel,
    loading,
  } = useContext(AdminRequestTableContext)
  console.log(open, id, loading)
  return (
    <Modal
      title="Title"
      visible={open}
      onOk={handleOk}
      confirmLoading={loading}
      onCancel={handleCancel}>
      <p>{id}</p>
    </Modal>
  )
}

export default InitRequestModal
