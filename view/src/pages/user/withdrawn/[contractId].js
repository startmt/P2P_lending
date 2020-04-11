import React, { Fragment, useEffect, useState } from 'react'
import { compose, bindActionCreators } from 'redux'
import { pageNameAction } from '~/modules/query/actions'
import { paymentAction } from '../../../modules/payment'
import withRedux from '~/hocs/with-redux'
import { LandingLayout } from '~/layouts/landing'
import { Result, Icon, Skeleton } from 'antd'
import { Form } from 'semantic-ui-react'
import { contractAction } from '../../../modules/contract'
import { WithdrawnFormField } from '../../../components/CashFormField'
import { transactionAction } from '../../../modules/transaction'
import { Map } from 'immutable'
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
    lendingRequest,
  } = props
  const [bank, setBank] = useState(null)
  useEffect(() => {
    setPageName('paymentForLoan')
    getContract(url.query.contractId)
    getTransactionLoading()
  }, [])
  const onSubmit = () => {
    handleWithdrawn(contractData.id, bank.key)
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
                    amount={lendingRequest?.amount}
                    setBank={setBank}
                    contractId={url.query.contractId}
                    error={
                      contractData?.borrower?.withdrawn ||
                      contractData?.state !== 'LENDING'
                    }
                    disabled={
                      contractData?.borrower?.withdrawn ||
                      contractData?.state !== 'LENDING' ||
                      !bank
                    }
                    handleWithdrawn={onSubmit}
                  />
                </Fragment>
              )}
              {role === 'lender' &&
                (contractData?.state ===
                  'SUCCESS_LENDING' ||
                  contractData?.state === 'REJECTED') && (
                  <Fragment>
                    <WithdrawnFormField
                      amount={
                        contractData?.lenderContract?.amount
                      }
                      fee={
                        contractData?.lenderContract?.fee
                      }
                      setBank={setBank}
                      contractId={url.query.contractId}
                      error={
                        contractData?.lender?.withdrawn ||
                        (contractData?.state !==
                          'SUCCESS_LENDING' &&
                          contractData?.state !==
                            'REJECTED')
                      }
                      disabled={
                        contractData?.lender?.withdrawn ||
                        (contractData?.state !==
                          'SUCCESS_LENDING' &&
                          contractData?.state !==
                            'REJECTED') ||
                        !bank
                      }
                      handleWithdrawn={onSubmit}
                    />
                  </Fragment>
                )}
              {role === 'lender' &&
                contractData?.state ===
                  'BORROWER_NOT_ACCEPT' && (
                  <Fragment>
                    <WithdrawnFormField
                      amount={lendingRequest?.amount}
                      setBank={setBank}
                      contractId={url.query.contractId}
                      error={
                        contractData?.lender?.withdrawn ||
                        contractData?.state !==
                          'BORROWER_NOT_ACCEPT'
                      }
                      disabled={
                        contractData?.lender?.withdrawn ||
                        contractData?.state !==
                          'BORROWER_NOT_ACCEPT' ||
                        !bank
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
  lendingRequest: (
    state.getIn([
      'lending',
      'lending',
      'dataById',
      'data',
    ]) || Map({})
  ).toJS(),
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
