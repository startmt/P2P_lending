import React, { useEffect, Fragment } from 'react'
import withRedux from '~/hocs/with-redux'
import { DashboardLayout } from '~/layouts/dashboard'
import { pageNameAction } from '~/modules/query/actions'
import { bindActionCreators } from 'redux'
import {
  WithdrawnButton,
  PaymentButton,
  ContractDetailButton,
  LendingDetailButton,
} from '../../components/MyContractActions'
import { lendingAction } from '../../modules/borrower/actions'
import { Table, Card } from 'antd'
import CreateLendingModal from '../../components/CreateLendingModal/CreateLendingModal'
const MyLendingPage = ({
  setPageName,
  getSelfLending,
  data,
}) => {
  useEffect(() => {
    setPageName('myContract')
    getSelfLending()
  }, [])
  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'state',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, record) => {
        return (
          <Fragment>
            <WithdrawnButton
              contractAddress={
                record['contract.contractDetailId']
              }
            />
            <PaymentButton
              contractAddress={
                record['contract.contractDetailId']
              }
              state={record.state}
            />
            <ContractDetailButton
              contractAddress={
                record['contract.contractDetailId']
              }
              state={record.state}
            />
            <LendingDetailButton
              lendingId={record['id']}
              state={record.state}
            />
          </Fragment>
        )
      },
    },
  ]
  return (
    <DashboardLayout>
      <div className="container section">
        <Card
          loading={!data}
          title="ใบคำร้องของฉัน"
          extra={<CreateLendingModal />}>
          <Table
            columns={columns}
            dataSource={data.toJS()}
          />
        </Card>
      </div>
    </DashboardLayout>
  )
}
const mapStateToProps = (state) => ({
  data: state.getIn(['lending', 'mylending', 'data']),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
      getSelfLending: lendingAction.getSelfLending,
    },
    dispatch,
  )
export default withRedux(
  mapStateToProps,
  mapDispatchToProps,
)(MyLendingPage)
