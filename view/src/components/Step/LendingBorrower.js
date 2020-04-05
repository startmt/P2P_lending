import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  ContractDescription,
  UserDescription,
} from '../Description'
import { bindActionCreators } from 'redux'
import { paymentAction } from '../../modules/payment'

const LendingBorrower = ({ data, loadingObj }) => {
  return (
    <Fragment>
      <UserDescription
        title="ผู้กู้"
        userData={data}
        loading={loadingObj}
      />

      <ContractDescription
        title="สัญญาการกู้"
        contractData={data}
        loading={loadingObj}
      />
    </Fragment>
  )
}
const mapStateToProps = (state) => ({
  loadingObj: state.getIn([
    'lending',
    'lending',
    'loadingObj',
  ]),
  paymentLoading: state.getIn([
    'paymentReducer',
    'payment',
    'loading',
  ]),
  data: state
    .getIn(['lending', 'lending', 'dataById'])
    .toJS(),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      payment: paymentAction.payment,
    },
    dispatch,
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LendingBorrower)
