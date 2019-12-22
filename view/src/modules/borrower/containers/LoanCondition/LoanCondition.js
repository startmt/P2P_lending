import React from 'react'
import { Modal } from 'semantic-ui-react'
// import LoanConditionFrom from '../containers/LoanCondition/LoanCondition'
import {
  Row,
  Col,
  Input,
  Checkbox,
  Button,
  Select,
} from 'antd'
import Link from 'next/link'
import './style.less'

function onChange(e) {
  console.log(`checked = ${e.target.checked}`)
}

const { Option } = Select

function handleChange(value) {
  console.log(`selected ${value}`)
}

const LoanCondition = (props) => {
  console.log(props)
  const { loanName, approvalLimit, loanPurpose, purposeDetail, setLoanName, open, submit, setModalLoan } = props
  //console.log(approvalLimit)
  return (
    <Modal open={open}
    onClose={() => setModalLoan(false)}
    //trigger={<Button onClick={() => setModalLoan(!modalLoan)} type="primary">Create Loan</Button>}
    >
      <Modal.Content>
        <Modal.Description>
          <div className="fromLoanCondition">
            <section className="section">
              <div className="Container">
                <Row>
                  <h4>
                    <div className="Topic">
                      ใบคำร้องขอการกู้สินเชื่อ
                    </div>
                  </h4>
                </Row>
                <Row>
                  <div class="field">
                    <label className="subTopic_2">
                      หัวข้อการขอกู้สินเชื่อ
                    </label>
                  </div>
                </Row>
                <Row>
                  <Input
                    className="titleLoan"
                    placeholder="กรอกหัวข้อการขอกู้สินเชื่อ"
                    type="text"
                    size="25"
                    value={loanName}
                    onChange={(e) => setLoanName(e.target.value)}
                  />
                </Row>
                <br />
                <Row>
                  <div class="field">
                    <label className="subTopic_2">
                      คุณต้องการขอสินเชื่อเท่าไหร่
                    </label>
                  </div>
                </Row>
                <Row>
                  <div class="field">
                    <Col span={8}>
                      <label>
                        วงเงินอนุมัติ 20,000 – 2,000,000 บาท
                      </label>
                    </Col>
                    <Col span={8}>
                      <Input
                        className="financialAmountArea"
                        placeholder="กรอกจำนวนเงินที่ต้องการกู้"
                        type="number"
                        maxLength="7"
                      />
                    </Col>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <label className="editComment">
                      *หมายเหตุ <br />
                      จำนวนผ่อนชำระเบื้องต้นคิดจากอัตราดอกเบี้ยสูงสุด
                      15% ต่อปี <br />
                      สามารถทราบอัตราดอกเบี้ยพิเศษเฉพาะ
                      หลังจากส่งเอกสารและได้รับการประเมินสินเชื่อ
                    </label>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={5}>
                    <label className="subTopic_2">
                      จุดประสงต์ในการกู้ :
                    </label>
                    <br />
                  </Col>
                  <Col span={5}>
                    <div>
                      <Select
                        defaultValue="Type"
                        style={{ width: 200 }}
                        onChange={handleChange}>
                        <Option value="1">
                          เงินทุนหมุนเวียน
                        </Option>
                        <Option value="2">
                          ปรับโครงสร้างหนี้
                        </Option>
                        <Option value="3">
                          ขยายกิจการ
                        </Option>
                        <Option value="4">
                          ลงทุนในโครงการใหม่
                        </Option>
                        <Option value="5">อื่นๆ</Option>
                      </Select>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <div class="ui form">
                      <div class="field">
                        <label className="subTopic_2">
                          รายละเอียดของจุดประสงค์ในการกู้
                        </label>
                        <textarea rows="2"></textarea>
                      </div>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <h4>
                    <div className="supTopic_2">
                      อนุญาติการเข้าถึงข้อมูลส่วนตัวเพื่อใช้ในการขอสินเชื่อ
                    </div>
                  </h4>

                  <label className="subTopic_2">
                    ข้อกำหนดในการขอสินเชื่อ
                  </label>
                  <br />
                  <div className="subTopic">
                    ต้องได้รับการยินยอม National Credit
                    Bureau (NCB) และ
                    ยอมรับข้อกำหนดและเงื่อนไข (T&C)
                  </div>

                  <label>
                    <Link href="https://www.scb.co.th/th/personal-banking/loans/personal-loans/speedy-loan.html">
                      <a>อ่านข้อกำหนดในการขอกู้สินเชื่อ</a>
                    </Link>
                  </label>
                  <br />
                  <Checkbox onChange={onChange}>
                    ยอมรับเงื่อนไขและข้อตกลงในการใช้บริการ
                  </Checkbox>
                </Row>
                <br />
                <Row>
                  <div className="buttonMargin">
                    <Link href="/borrower/listofrequestloan">
                      <Button onClick={submit} type="primary">
                        Create loan
                      </Button>
                    </Link>
                  </div>
                </Row>
              </div>
            </section>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
export default LoanCondition
