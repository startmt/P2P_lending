import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'antd'

const StateLoaner = (props) => {
  <table class="ui selectable inverted table">
    <thead>
      <tr>
        <th>Start Date</th>
        <th>Detail</th>
        <th>Status</th>
        <th class="right aligned">Upload Information</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>24/03/19</td>
        <td>ขยายกิจการ</td>
        <td>Waiting</td>
        <td class="right aligned" Link herf='../UploadFromBorrower'>None</td>
      </tr>
      <tr>
        <td>09/12/18</td>n
        <td>เงินทุนหมุนเวียน</td>
        <td>Approved</td>
        <td class="right aligned">Uploaded</td>
      </tr>
      <tr>
        <td>31/07/16</td>
        <td>เงินทุนหมุนเวียน</td>
        <td>Denied</td>
        <td class="right aligned">Uploaded</td>
      </tr>
    </tbody>
  </table>
}

export default StateLoaner
