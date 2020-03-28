import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import './style.less'
import LoanCondition from '~/modules/borrower/containers/LoanCondition/LoanCondition'
import UploadFromBorrower from '~/modules/borrower/containers/UploadFromBorrower/UploadFromBorrower'
import moment from 'moment'
import axios from 'axios'
import config from '../../../../../config'

const ListOfRequestLoan = (props) => {
  const [loanName, setLoanName] = useState('')
  const [approvalLimit, setApprovalLimit] = useState(20000)
  const [loanPurpose, setLoanPurpose] = useState('เงินทุนหมุนเวียน')
  const [purposeDetail, setPurposeDetail] = useState('')
  const [modalLoan, setModalLoan] = useState(false)
  const [loanList, setLoanList]= useState([])
  const [idCard, setIdCard] = useState(null)
  const [salary, setSalary] = useState(null)
  const [modalUpload, setModalUpload] = useState(false)
  // const [createAt, setCreateAt] = useState('')
 
  const fetch = async () => {
    const result = await axios.get(`${config.LENDING_HOST}/lending/my`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    console.log(result)
    setLoanList(result.data)
  }
 
  useEffect(() => {
    fetch()
  },[]);
 
  const submitForm = async () => {
    console.log(idCard)
    let data = new FormData();

    data.append('category', 1);
    data.append('title', loanName);
    data.append('amount', approvalLimit);
    data.append('loanTenor', 8);
    data.append('description', purposeDetail);
    data.append('credit', idCard.originFileObj);
    data.append('salary', salary.originFileObj);
    console.log(idCard)
    console.log(salary)
    const result = await axios.post(`${config.LENDING_HOST}/lending/create`, data,  { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    console.log(result)
    setLoanName('')
    setApprovalLimit(20000)
    setLoanPurpose('เงินทุนหมุนเวียน')
    setPurposeDetail('')
    setModalLoan(false)
    setModalUpload(false)
  }
 
  return (
    <div className="fromRequestLoan">
      <div class="stateTable">
      <Button onClick={(e) => setModalLoan(!modalLoan)} type="primary">Create Loan</Button>
        <Row>
          <div className="createLoan">
            <LoanCondition
              open={modalLoan}
              loanName={loanName}
              approvalLimit={approvalLimit}
              loanPurpose={loanPurpose}
              purposeDetail={purposeDetail}
              idCard={idCard}
              setModalLoan={setModalLoan}
              setLoanName={setLoanName}
              setApprovalLimit={setApprovalLimit}
              setLoanPurpose={setLoanPurpose}
              setPurposeDetail={setPurposeDetail}
              setIdCard={setIdCard}
              setModalUpload={setModalUpload}
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
            {loanList.map(data => (
            <tr>
              <td>Kritsakorn Tongchaikun</td>
              <td>{data.amount}</td>
              <td>{data.createdAt}</td>
              <td>
                {data.state === 'LENDING_WAIT_BORROWER_ACCEPT_MONEY' && 'Review'}
                {/* {data.state === 'INIT' && 'Initial'}
                {data.state === 'upload' && 'Upload'}
                {data.state === 'INQU' && 'Inquire'}
                {data.state === 'Review' && 'Review'}
                {data.state === 'Submit' && 'Submit'}
                {data.state === 'Cancel' && 'Cancel'} */}
              </td>
              <td>
                {data.state === 'upload' && <UploadFromBorrower />}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <UploadFromBorrower open={modalUpload} submit={submitForm} setIdCard={setIdCard} setSalary={setSalary}/>
    </div>
  )
}

export default ListOfRequestLoan