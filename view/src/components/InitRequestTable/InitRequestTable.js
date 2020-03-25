import React, { useContext, Fragment } from 'react'
import { Table, Skeleton, Card } from 'antd'
import { connect } from 'react-redux'
import './styles.less'
import { AdminRequestTableContext } from '../../context/AdminRequestTableContext'
import InitRequestModal from './InitRequestModal'

const InitRequestTable = ({ initRequestStore }) => {
  const { handleModal, open } = useContext(
    AdminRequestTableContext,
  )
  console.log(open)

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
        <a
          onClick={() => {
            handleModal(record.id)
          }}>
          ดูข้อมูล
        </a>
      ),
    },
  ]
  return (
    <Fragment>
      <Card title="ใบคำร้อง">
        <Skeleton
          active
          loading={initRequestStore.get('loading')}>
          <Table
            columns={columns}
            dataSource={initRequestStore.get('data').toJS()}
            pagination={false}
          />
        </Skeleton>
      </Card>
      <InitRequestModal />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  initRequestStore: state.getIn([
    'admin',
    'adminInitRequest',
  ]),
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitRequestTable)
