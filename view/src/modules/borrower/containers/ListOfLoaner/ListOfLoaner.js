import React from 'react'
import { Table } from 'semantic-ui-react'
import './style.less'

const StateLoaner = (props) => {
  return (
    <div class="stateTable">
      <table class="ui selectable table">
        <thead>
          <tr>
            <th>Loaner Name</th>
            <th>Amount</th>
            <th>Create at</th>
            <th>Type</th>
            <th>
              Upload Information
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24/03/19</td>
            <td>ขยายกิจการ</td>
            <td>Waiting</td>
            <td>
              <a href="../UploadFromBorrower">None</a>
            </td>
          </tr>
          <tr>
            <td>09/12/18</td>
            <td>เงินทุนหมุนเวียน</td>
            <td>Approved</td>
            <td>Uploaded</td>
          </tr>
          <tr>
            <td>31/07/16</td>
            <td>เงินทุนหมุนเวียน</td>
            <td>Denied</td>
            <td>Uploaded</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StateLoaner
