import React from 'react'
import { Table } from 'semantic-ui-react'
import { Row, Col, Button } from 'antd'
import Link from 'next/link'
import './style.less'

const AdminListOfLoanTransaction = (props) => {
  return (
    <div className="fromStateLoan">
      <div class="stateTable">
        <table class="ui selectable table">
          <thead>
            <tr>
              <th><div className="ThTopic">Borrower Name</div></th>
              <th><div className="ThTopic">Amount</div></th>
              <th><div className="ThTopic">Create at</div></th>
              <th><div className="ThTopic">Document</div></th>
              <th><div className="ThTopic">Actions /s</div></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className="ThTopic">Rapis Sirikun</div></td>
              <td><div className="ThTopic">20,000</div></td>
              <td><div className="ThTopic">Today at 11:54 PM</div></td>
              <td>
                  <div className="ThTopic">
                <a href="/admin/adminrequestuploaddoc">Detail</a>
                </div>
              </td>
              <td>
                <div className="AcceptButtonMargin">
                  <Link href="/borrower/uploadborrowerfrom">
                    <Button type="primary">Accept</Button>
                  </Link>
                </div>
                <div className="CancelButtonMargin">
                  <Link href="/borrower/uploadborrowerfrom">
                    <Button type="primary">Cancel</Button>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td><div className="ThTopic">Thongsabad Kadsonnguen</div></td>
              <td><div className="ThTopic">200,000</div></td>
              <td><div className="ThTopic">09/12/18</div></td>
              <td>
              <div className="ThTopic">
                <a href="/admin/adminrequestuploaddoc">Detail</a>
                </div>
              </td>
              <td>
                <div className="AcceptButtonMargin">
                  <Link href="/borrower/uploadborrowerfrom">
                    <Button type="primary">Accept</Button>
                  </Link>
                </div>
                <div className="CancelButtonMargin">
                  <Link href="/borrower/uploadborrowerfrom">
                    <Button type="primary">Cancle</Button>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td><div className="ThTopic">Leo Whereami</div></td>
              <td><div className="ThTopic">1,000,000</div></td>
              <td><div className="ThTopic">31/07/16</div></td>
              <td>
              <div className="ThTopic">
                <a href="/admin/adminrequestuploaddoc">Detail</a>
                </div>
              </td>
              <td>
                <div className="AcceptButtonMargin">
                  <Link href="/borrower/uploadborrowerfrom">
                    <Button type="primary">Accept</Button>
                  </Link>
                </div>
                <div className="CancelButtonMargin">
                  <Link href="/borrower/uploadborrowerfrom">
                    <Button type="primary">Cancel</Button>
                  </Link>
                </div>
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

export default AdminListOfLoanTransaction
