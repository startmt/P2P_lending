import React, { Fragment, useState, useEffect } from 'react'
import { Table, Skeleton, Card, Modal } from 'antd'
import { connect } from 'react-redux'
import { adminAction } from '../../modules/admin/actions'
import './styles.less'
import InitRequestModal from './InitRequestModal'
import { Button } from 'antd'
import { bindActionCreators } from 'redux'
import useForm from 'react-hook-form'
import RemarkCancelModal from './RemarkCancelModal'
const InitRequestTable = ({
  initRequestList,
  handleModal,
  handleConfirm,
  confirm,
}) => {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState('')
  const {
    register,
    handleSubmit,
    setValue,
    errors,
    triggerValidation,
  } = useForm()
  useEffect(() => {
    register(
      {
        name: 'remark',
      },
      { required: 'กรุณากรอกหมายเหตุ' },
    )
  }, [])
  const handleClose = () => {
    setOpen(false)
    setId('')
  }
  const handleOpen = (id) => {
    setOpen(true)
    setId(id)
  }
  const onFormChange = async (e, { name, value }) => {
    setValue(name, value)
    await triggerValidation({ name })
  }
  const onSubmit = handleSubmit(async (value) => {
    await handleConfirm(id, 'REJECT', value.remark)
    handleClose()
  })
  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'จำนวน',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'อัตราดอกเบี้ย',
      dataIndex: 'interestRate',
      key: 'interestRate',
    },
    {
      title: 'จำนวนงวด',
      key: 'loanTenor',
      dataIndex: 'loanTenor',
    },
    {
      title: 'ข้อมูล',
      key: 'docs',
      render: (text, record) => (
        <a
          onClick={() => {
            handleModal(record.id)
          }}>
          ดูข้อมูล
        </a>
      ),
    },
    {
      title: 'action',
      key: 'action',
      render: (text, record) => (
        <Fragment>
          <Button
            className="ant-button"
            type="primary"
            loading={confirm.get('loading')}
            onClick={() => {
              handleConfirm(record.id, 'APPROVE_INIT')
            }}>
            ยืนยัน
          </Button>
          <Button
            className="ant-button"
            loading={confirm.get('loading')}
            type="danger"
            onClick={() => handleOpen(record.id)}>
            ยกเลิก
          </Button>
          <RemarkCancelModal
            handleCancel={handleClose}
            handleSubmit={onSubmit}
            open={open}
            onFormChange={onFormChange}
            errors={errors}
          />
        </Fragment>
      ),
    },
  ]
  return (
    <Fragment>
      <Card title="ใบคำร้อง">
        <Skeleton
          active
          loading={initRequestList.get('loading')}>
          <Table
            columns={columns}
            dataSource={initRequestList.get('data').toJS()}
            pagination={false}
          />
        </Skeleton>
      </Card>
      <InitRequestModal />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  initRequestList: state.getIn([
    'admin',
    'adminInitRequest',
  ]),
  confirm: state.getIn(['admin', 'confirm']),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleModal: adminAction.getInitRequestData,
      handleConfirm: adminAction.confirmRequest,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitRequestTable)
