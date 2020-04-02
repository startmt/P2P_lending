import React, { Fragment, useState, useEffect } from 'react'
import { Table, Skeleton, Card, Modal } from 'antd'
import { connect } from 'react-redux'
import { adminAction } from '../../modules/admin/actions'
import './styles.less'
import InitRequestModal from './LendingDataModal'
import { Button } from 'antd'
import { bindActionCreators } from 'redux'
import useForm from 'react-hook-form'
import { lendingAction } from '../../modules/borrower/actions'
import LendingDataModal from './LendingDataModal'
import Router from 'next/router'
const LendingTable = ({
  lending,
  handleConfirm,
  confirm,
  getDataById,
}) => {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  const handleModal = async (id) => {
    setOpen(true)
    await getDataById(id)
  }
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
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Fragment>
          <Button
            className="ant-button"
            type="primary"
            // loading={confirm.get('loading')}
            onClick={() => {
              Router.push({
                pathname: `/user/lending/${record.id}`,
              })
            }}>
            ดูรายละเอียด
          </Button>
        </Fragment>
      ),
    },
  ]
  return (
    <Fragment>
      <Card title="ใบคำร้อง">
        <Skeleton active loading={lending.get('loading')}>
          <Table
            columns={columns}
            dataSource={lending.get('data').toJS()}
          />
        </Skeleton>
      </Card>
      <LendingDataModal
        open={open}
        handleCancel={handleClose}
      />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  lending: state.getIn(['lending', 'lending']),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getDataById: lendingAction.getLendingData,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LendingTable)
