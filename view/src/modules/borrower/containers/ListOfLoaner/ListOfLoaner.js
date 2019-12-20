import React from 'react'
import { Table } from 'semantic-ui-react'
import { Row, Col, Select } from 'antd'
import Link from 'next/link'
import './style.less'

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

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
            <tr>
              <td>Kritsakorn Yungpenny</td>
              <td>850,000</td>
              <td>24/03/19</td>
              <td>ขยายกิจการ</td>
              <td>
                <a href="../UploadFromBorrower">Click</a>
              </td>
            </tr>
            <tr>
              <td>Thongsabad Kadsonnguen</td>
              <td>200,000</td>
              <td>09/12/18</td>
              <td>เงินทุนหมุนเวียน</td>
              <td>
                <a href="../UploadFromBorrower">Click</a>
              </td>
            </tr>
            <tr>
              <td>Leo Whereami</td>
              <td>1,000,000</td>
              <td>31/07/16</td>
              <td>เงินทุนหมุนเวียน</td>
              <td>
                <a href="../UploadFromBorrower">Click</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
    </div>
  )
}

export default StateLoaner
