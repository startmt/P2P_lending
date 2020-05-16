import React, { useState, useEffect } from 'react'
import { Form, Select } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { bankAction } from '../../modules/borrower/actions'
import { connect } from 'react-redux'
import { List } from 'immutable'

const UserBankMenu = ({
  setData,
  bankList,
  loading,
  getBank,
  emptyList,
}) => {
  const [value, setValue] = useState({})
  let bank = []
  useEffect(() => {
    getBank('VERIFIED')
  }, [])
  if (!loading) {
    bank = bankList.map((data) => ({
      key: data.transferId,
      value: data.transferId,
      text: data.name,
    }))
  }
  const handleValue = (value) => {
    setData(value)
    setValue(value)
  }
  if (emptyList) {
    return <div>กรุณาผูกบัญชีรับเงินก่อน</div>
  }

  return (
    <Form.Field>
      <Select
        loading={loading}
        value={value?.key}
        name="bank_name"
        onChange={(e) => {
          handleValue(
            bank.find(
              (data) => data.text === e.target.textContent,
            ),
          )
        }}
        placeholder="กรุณาเลือกธนาคาร"
        options={bank || []}
      />
    </Form.Field>
  )
}
const mapStateToProps = (state) => ({
  bankList: (
    state.getIn(['lending', 'bank', 'data']) || List([])
  ).toJS(),
  loading: state.getIn(['lending', 'bank', 'loading']),
  emptyList: state.getIn(['lending', 'bank', 'emptyList']),
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getBank: bankAction.getBank,
    },
    dispatch,
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserBankMenu)
