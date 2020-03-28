import React from 'react'
import { Table } from 'semantic-ui-react'
import { Row, Col, Select } from 'antd'
import Link from 'next/link'
import UploadFromBorrower from '~/modules/borrower/containers/UploadFromBorrower/UploadFromBorrower'
import './style.less'

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const moc = [{
  Name:'Kitti',
  Amount:200000,
  CreateAt:'24/24/2400',
  Type:'ขยายกิจการ'
}]

const StateLoaner = (props) => {
  return (
    <div className="fromStateLoan">
      <div class="stateTable">
        <Row>
          <div className="createLoan">
            <Select
              defaultValue="Type"
              style={{ width: 200 }}
              onChange={handleChange}>
              <Option value="1">เงินทุนหมุนเวียน</Option>
              <Option value="2">ปรับโครงสร้างหนี้</Option>
              <Option value="3">ขยายกิจการ</Option>
              <Option value="4">ลงทุนในโครงการใหม่</Option>
              <Option value="5">อื่นๆ</Option>
            </Select>
          </div>
          <br />
        </Row>
        <table class="ui selectable table">
          <thead>
            <tr>
              <th>Loaner Name</th>
              <th>Amount</th>
              <th>Create at</th>
              <th>Type</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {moc.map(loaner => (
            <tr>
              <td>{loaner.Name}</td>
              <td>{loaner.Amount}</td>
              <td>{loaner.CreateAt}</td>
              <td>{loaner.Type}</td>
              <td>
                <a href="../borrower/detailloanerdoc">Click</a>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
    </div>
  )
}

export default StateLoaner
