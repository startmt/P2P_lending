import React, { Fragment } from 'react'
import { Select } from 'semantic-ui-react'

const bankCodeList = [
  {
    key: 'bbl',
    value: 'bbl',
    text: 'ธนาคารกรุงเทพ',
  },
  {
    key: 'kbank',
    value: 'kbank',
    text: 'ธนาคารกรุงไทย',
  },
  {
    key: 'tmb',
    value: 'tmb',
    text: 'ธนาคารทหารไทย',
  },
  {
    key: 'scb',
    value: 'scb',
    text: 'ธนาคารไทยพาณิชย์',
  },
  {
    key: 'bay',
    value: 'bay',
    text: 'ธนาคารกรุงศรีอยุธยา',
  },
]

const BankMenu = (props) => {
  return (
    <Fragment>
      <Select
        {...props}
        name="bank_code"
        placeholder="กรุณาเลือกธนาคาร"
        options={bankCodeList}
      />
    </Fragment>
  )
}

export default BankMenu
