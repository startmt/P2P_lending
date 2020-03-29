import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import { Row, Col, Select } from 'antd'
import axios from 'axios'
import config from '../../../../../config'
import Link from 'next/link'
import UploadFromBorrower from '~/modules/borrower/containers/UploadFromBorrower/UploadFromBorrower'
import './style.less'

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const StateLoaner = (props) => {
  const [data, setData] = useState([])

  const fetch = async () => {
    const result = await axios.get(`${config.LENDING_HOST}/lending/my`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    console.log(result)
    setData(result.data)
  }

  useEffect(() => {
    fetch()
  },[]);

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
            {data.map(loaner => (
            <tr>
              <td>Kritsakorn Tongchaikun</td>
              <td>{loaner.amount}</td>
              <td>{loaner.createdAt}</td>
              <td>เงินทุนหมุนเวียน</td>
              <td>
                {/* File */}
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
