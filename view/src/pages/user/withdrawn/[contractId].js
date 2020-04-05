import React, { Fragment, useState, useEffect } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import { paymentAction } from '../../../modules/payment'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import { PaymentMenu } from '../../../components/BankMenu'
import moment from 'moment'
import { Result, Button, Icon, Skeleton } from 'antd'
import { Form, Input, Message } from 'semantic-ui-react'
import { contractAction } from '../../../modules/contract'
import { WithdrawnFormField } from '../../../components/CashFormField'
import { transactionAction } from '../../../modules/transaction'
const Index = (props) => {
  const {
    setPageName,
    role,
    url,
    handleWithdrawn,
    getContract,
    contractData,
    loadingContract,
    getTransactionLoading,
  } = props
  const [bank, setBank] = useState(null)
  useEffect(() => {
    setPageName('paymentForLoan')
    getContract(url.query.contractId)
    getTransactionLoading()
  }, [])
  const onSubmit = () => {
    handleWithdrawn(
      contractData.id,
      'recp_test_5hv7fdsfkar9q9qgvgj',
    )
  }
  return (
    <LandingLayout>
      <div className="container section">
        <Result
          icon={<Icon type="bank" />}
          title="การถอนเงิน"
          subTitle="กรุณาเลือกช่องทางการถอนเงิน">
          <Skeleton loading={loadingContract}>
            <Form>
              {role === 'borrower' && (
                <Fragment>
                  <WithdrawnFormField
                    amount={contractData?.amount}
                    bank={bank}
                    setBank={setBank}
                    contractId={url.query.contractId}
                    disabled={
                      contractData?.borrower?.withdrawn ||
                      contractData?.state !== 'LENDING'
                    }
                    handleWithdrawn={onSubmit}
                  />
                </Fragment>
              )}
              {role === 'lender' && (
                <Fragment>
                  <WithdrawnFormField
                    amount={
                      contractData?.lenderContract?.amount
                    }
                    bank={bank}
                    fee={contractData?.lenderContract?.fee}
                    setBank={setBank}
                    contractId={url.query.contractId}
                    disabled={
                      contractData?.lender?.withdrawn ||
                      contractData?.state !==
                        'SUCCESS_LENDING'
                    }
                    handleWithdrawn={onSubmit}
                  />
                </Fragment>
              )}
            </Form>
          </Skeleton>
        </Result>
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
  role: state.getIn(['authentication', 'auth', 'role']),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setPageName: pageNameAction.setPageName,
      handleWithdrawn: paymentAction.withdrawn,
      getContract: contractAction.getCurrentContract,
      getTransactionLoading: transactionAction.loading,
    },
    dispatch,
  )
export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
)(Index)
