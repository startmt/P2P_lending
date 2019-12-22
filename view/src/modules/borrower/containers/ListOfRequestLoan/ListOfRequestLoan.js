import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import { Row, Col, Button } from 'antd'
import Link from 'next/link'
import './style.less'
import LoanCondition from '~/modules/borrower/containers/LoanCondition/LoanCondition'
import UploadFromBorrower from '~/modules/borrower/containers/UploadFromBorrower/UploadFromBorrower'
import moment from 'moment'

const ListOfRequestLoan = (props) => {
  const [loanName, setLoanName] = useState('')
  const [approvalLimit, setApprovalLimit] = useState(20000)
  const [loanPurpose, setLoanPurpose] = useState('เงินทุนหมุนเวียน')
  const [purposeDetail, setPurposeDetail] = useState('')
  const [modalLoan, setModalLoan] = useState(false)
  const [loanList, setLoanList]= useState([])
  // const [createAt, setCreateAt] = useState('')

  useEffect(() => {
    localStorage.setItem('loanList', loanList);
  }, [loanList]);


  const submitForm = () => {
    setLoanList([...loanList, { loanName, approvalLimit, loanPurpose, purposeDetail, loanerName:  'boss', state: 'Initial', createAt: moment().calendar() }])
    window.localStorage.setItem('loanList', [...loanList, { loanName, approvalLimit, loanPurpose, purposeDetail, loanerName:  'boss', state: 'Initial', createAt: moment().calendar() }])
    setLoanName('')
    setApprovalLimit(20000)
    setLoanPurpose('เงินทุนหมุนเวียน')
    setPurposeDetail('')
    setModalLoan(false)
  }
  //setLoanList(localStorage.getItem('loanList'))
  return (
    <div className="fromRequestLoan">
      <div class="stateTable">
      <Button onClick={(e) => setModalLoan(!modalLoan)} type="primary">Create Loan</Button>
        <Row>
          <div className="createLoan">
            <LoanCondition
              open={modalLoan}
              submit={submitForm}
              loanName={loanName}
              approvalLimit={approvalLimit}
              loanPurpose={loanPurpose}
              purposeDetail={purposeDetail}
              setModalLoan={setModalLoan}
              setLoanName={setLoanName}
              setApprovalLimit={setApprovalLimit}
              setLoanPurpose={setLoanPurpose}
              setPurposeDetail={setPurposeDetail}
            />
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
            {loanList.map(loan => 
            <tr>
<td>{loan.loanerName}</td>
            <td>{loan.approvalLimit}</td>
            <td>{loan.createAt}</td>
            <td>{loan.state}</td>
            <td>
            <UploadFromBorrower />
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
      <br />
      <br />
    </div>
  )
}

export default ListOfRequestLoan
