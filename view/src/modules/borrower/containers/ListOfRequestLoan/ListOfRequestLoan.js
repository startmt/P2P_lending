import React from 'react'
import { Table } from 'semantic-ui-react'
import { Row, Col, Button } from 'antd'
import Link from 'next/link'
import './style.less'
import LoanCondition from '~/modules/borrower/containers/LoanCondition/LoanCondition'
import UploadFromBorrower from '~/modules/borrower/containers/UploadFromBorrower/UploadFromBorrower'

const ListOfRequestLoan = (props) => {
  return (
    <div className="fromRequestLoan">
      <div class="stateTable">
        <Row>
          <div className="createLoan">
            <LoanCondition />
          </div>
          <br />
        </Row>
        <table class="ui selectable table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Create at</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kritsakorn Yongpenny</td>
              <td>200,000</td>
              <td>24/03/19</td>
              <td>Initial</td>
              <td>
                <UploadFromBorrower />
              </td>
            </tr>
            <tr>
              <td>Thongsabad Kadsonnguen</td>
              <td>550,000</td>
              <td>09/12/18</td>
              <td>Initial</td>
              <td>
                <Button
                  type="primary"
                  href="/borrower/detailloanerdoc">
                  Detail
                </Button>
              </td>
            </tr>
            <tr>
              <td>Zhuwang Kingkol</td>
              <td>850,000</td>
              <td>21/03/17</td>
              <td>Process</td>
              <td>
                <Button type="primary" href="/borrower/paymentforloan">Pay</Button>
              </td>
            </tr>
            <tr>
              <td>Leo Whereami</td>
              <td>1,000,000</td>
              <td>31/07/16</td>
              <td>Pay in 05/08/16</td>
              <td>
                <Button type="primary" href="/borrower/paymentsuccess">Pay</Button>
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

export default ListOfRequestLoan
