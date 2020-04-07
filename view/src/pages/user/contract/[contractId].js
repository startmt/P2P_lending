import React, { useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import { Result, Icon, Skeleton, Card, Tag } from 'antd'
import { contractAction } from '../../../modules/contract'
import {
  UserDescriptionContract,
  PayDateContract,
} from '../../../components/ContractDescription'
import moment from 'moment'

const renderState = (state, borrower, lender) => {
  if (state === 'LENDING' && !borrower) {
    return (
      <Tag color="blue">
        กำลังดำเนินการ (รอผู้กู้รับเงิน)
      </Tag>
    )
  }
  if (state === 'LENDING' && borrower) {
    return <Tag color="blue">กำลังดำเนินการ</Tag>
  }
  if (state === 'SUCCESS_LENDING' && !lender) {
    return (
      <Tag color="blue">
        กำลังดำเนินการ (รอผู้ให้กู้รับเงิน)
      </Tag>
    )
  }
  if (state === 'SUCCESS_LENDING' && lender) {
    return <Tag color="green">เสร็จสิ้น</Tag>
  }
  if (state === 'BORROWER_NOT_ACCEPT' && !lender) {
    return (
      <Tag color="red">
        ผู้กู้ไม่รับเงิน (รอให้ผู้ใก้กู้รับเงินคืน)
      </Tag>
    )
  }
  if (state === 'BORROWER_NOT_ACCEPT' && lender) {
    return (
      <Tag color="red">
        ผู้กู้ไม่รับเงิน (ผู้ให้กู้รับเงินคืนแล้ว)
      </Tag>
    )
  }
  if (state === 'REJECTED') {
    return <Tag color="red">ล้มเหลว</Tag>
  }
}

const ContractByAddress = (props) => {
  const {
    setPageName,
    url,
    logs,
    getContract,
    contractData,
    loadingContract,
    loadingList,
    contractList,
  } = props
  useEffect(() => {
    setPageName('paymentForLoan')
    getContract(url.query.contractId)
  }, [])
  return (
    <LandingLayout>
      <div className="container section">
        <Card
          extra={renderState(
            contractData.state,
            contractData?.borrower?.withdrawn,
            contractData?.lender?.withdrawn,
          )}>
          <Result
            icon={<Icon type="profile" />}
            title="สัญญาการกู้เงิน"
            subTitle={url.query.contractId}>
            <Skeleton loading={loadingContract}>
              <UserDescriptionContract
                title="ข้อมูลผู้กู้"
                userData={contractData.borrowerDetail}
              />
              <UserDescriptionContract
                title="ข้อมูลผู้ให้กู้"
                userData={contractData.lenderDetail}
              />
              <PayDateContract
                loading={loadingList}
                payList={contractList}
                state={contractData.state}
              />
              <Card title="logs" className="mt-2">
                <ul>
                  {logs.map((log) => (
                    <li>
                      {`${log.log} เมื่อ ${moment(
                        log.createdAt,
                      ).format('LLLL')}`}
                    </li>
                  ))}
                </ul>
              </Card>
            </Skeleton>
          </Result>
        </Card>
      </div>
    </LandingLayout>
  )
}

const mapStateToProps = (state) => ({
  contractData: state.getIn([
    'contract',
    'contract',
    'data',
  ]),
  loadingContract: state.getIn([
    'contract',
    'contract',
    'loading',
  ]),
  loadingList: state.getIn([
    'contract',
    'contract',
    'loadingList',
  ]),
  logs: state.getIn(['contract', 'contract', 'logs']),
  contractList: state.getIn([
    'contract',
    'contract',
    'contractList',
  ]),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
      getContract: contractAction.getCurrentContract,
    },
    dispatch,
  )
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(ContractByAddress)
