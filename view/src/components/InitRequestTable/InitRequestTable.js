import react from 'react'
import { Table, Skeleton, Card } from 'antd'
import { connect } from 'react-redux'
import './styles.less'
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
    render: (text, record) => <span>ดูข้อมูล</span>,
  },
]
const InitRequestTable = ({ initRequestStore }) => {
  return (
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
