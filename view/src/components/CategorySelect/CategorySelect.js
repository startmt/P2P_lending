import React, { Fragment, useState } from 'react'
import { Select } from 'semantic-ui-react'

const categoryList = [
  {
    key: 'ต่อยอดธุรกิจ',
    value: 'ต่อยอดธุรกิจ',
    text: 'ต่อยอดธุรกิจ',
  },
  {
    key: 'ผ่อนชำระ',
    value: 'ผ่อนชำระ',
    text: 'ผ่อนชำระ',
  },
]

const CategorySelect = ({ setData, error }, props) => {
  const [category, setCategory] = useState(null)
  const handleChange = (value) => {
    setCategory(value)
    setData(value)
  }
  return (
    <Fragment>
      <Select
        {...props}
        error={error || false}
        name="category"
        value={category?.key}
        onChange={(e) => {
          handleChange(
            categoryList.find(
              (data) => data.text === e.target.textContent,
            ),
          )
        }}
        placeholder="กรุณาเลือกประเภท"
        options={categoryList}
      />
    </Fragment>
  )
}

export default CategorySelect
