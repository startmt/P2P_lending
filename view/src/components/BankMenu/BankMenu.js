import React, { Fragment, useState } from 'react'
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

const BankMenu = ({ setData }, props) => {
  const [bank, setBank] = useState(null)
  const handleChange = (value) => {
    setBank(value)
    setData(value)
  }
  return (
    <Fragment>
      <Select
        {...props}
        name="bank_code"
        value={bank?.key}
        onChange={(e) => {
          handleChange(
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

export default BankMenu
