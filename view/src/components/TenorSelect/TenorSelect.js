import React, { Fragment, useState } from 'react'
import { Select } from 'semantic-ui-react'

const tenorList = [
  {
    key: '8',
    value: '8',
    text: '8',
  },
  {
    key: '16',
    value: '16',
    text: '16',
  },
  {
    key: '24',
    value: '24',
    text: '24',
  },
]

const CategorySelect = ({ setData }, props) => {
  const [tenor, setTenor] = useState(null)
  const handleChange = (value) => {
    setTenor(value)
    setData(value)
  }
  return (
    <Fragment>
      <Select
        {...props}
        name="loanTenor"
        value={tenor?.key}
        onChange={(e) => {
          handleChange(
            tenorList.find(
              (data) => data.text === e.target.textContent,
            ),
          )
        }}
        placeholder="กรุเลือกจำนวนงวดคืนชำระ"
        options={tenorList}
      />
    </Fragment>
  )
}

export default CategorySelect
