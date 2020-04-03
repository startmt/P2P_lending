import React, { Fragment, useState } from 'react'
import { Select } from 'semantic-ui-react'

const bankCodeList = [
  {
    key: 'internet_banking_bbl',
    value: 'internet_banking_bbl',
    text: 'ธนาคารกรุงเทพ',
  },
  {
    key: 'internet_banking_ktb',
    value: 'internet_banking_ktb',
    text: 'ธนาคารกรุงไทย',
  },
  {
    key: 'internet_banking_scb',
    value: 'internet_banking_scb',
    text: 'ธนาคารไทยพาณิชย์',
  },
  {
    key: 'internet_banking_bay',
    value: 'internet_banking_bay',
    text: 'ธนาคารกรุงศรีอยุธยา',
  },
]

const PaymentMenu = ({ data, setData }, props) => {
  return (
    <Fragment>
      <Select
        {...props}
        name="bank_name"
        value={data?.key}
        onChange={(e) => {
          setData(
            bankCodeList.find(
              (data) => data.text === e.target.textContent,
            ),
          )
        }}
        placeholder="กรุณาเลือกธนาคาร"
        options={bankCodeList}
      />
    </Fragment>
  )
}

export default PaymentMenu
