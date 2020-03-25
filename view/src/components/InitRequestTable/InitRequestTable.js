import React, { Fragment } from 'react'
import { Table, Skeleton, Card } from 'antd'
import { connect } from 'react-redux'
import { adminAction } from '../../modules/admin/actions'
import './styles.less'
import InitRequestModal from './InitRequestModal'
import { bindActionCreators } from 'redux'

const InitRequestTable = ({
  initRequestList,
  handleModal,
}) => {
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
      title: 'เอกสาร',
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
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleModal: adminAction.getInitRequestData,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitRequestTable)
