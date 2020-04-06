import React, { useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import { paymentAction } from '../../../modules/payment'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import { Result, Icon, Skeleton, Card, Tag } from 'antd'
import { contractAction } from '../../../modules/contract'
import {
  UserDescriptionContract,
  PayDateContract,
} from '../../../components/ContractDescription'
import moment from 'moment'

const renderState = (state) => {
  if (state === 'LENDING') {
    return (
      <Tag color="blue">กำลังอยู่ในระหว่างการกู้เงิน</Tag>
    )
  }
  if (state === 'SUCCESS_LENDING') {
    return <Tag color="green">เสร็จสิ้น</Tag>
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
    handlePayment,
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
        <Card extra={renderState(contractData.state)}>
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
      handlePayment: paymentAction.payment,
      getContract: contractAction.getCurrentContract,
    },
    dispatch,
  )
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(ContractByAddress)
