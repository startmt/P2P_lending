import React from 'react'
// import LoanConditionFrom from '../components/LoanCondition'
import { From, TextArea, Checkbox } from 'semantic-ui-react'
import { Row, Col } from 'antd'
import Link from 'next/link'
import './style.less'

const LoanCondition = (props) => {
  return (
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
            <input
              className="titleLoan"
              placeholder="กรอกหัวข้อการขอกู้สินเชื่อ"
              type="text"
              size="25"
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
                <input
                  className="financialAmountArea"
                  placeholder="กรอกจำนวนเงินที่ต้องการกู้"
                  type="text"
                  size="25"
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
              <select class="ui dropdown">
                <option value="">Type</option>
                <option value="0">เงินทุนหมุนเวียน</option>
                <option value="1">ปรับโครงสร้างหนี้</option>
                <option value="2">ขยายกิจการ</option>
                <option value="3">
                  ลงทุนในโครงการใหม่
                </option>
                <option value="4">อื่นๆ</option>
              </select>
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
              ต้องได้รับการยินยอม National Credit Bureau
              (NCB) และ ยอมรับข้อกำหนดและเงื่อนไข (T&C)
            </div>

            <label>
              <Link href="https://www.scb.co.th/th/personal-banking/loans/personal-loans/speedy-loan.html">
                <a>อ่านข้อกำหนดในการขอกู้สินเชื่อ</a>
              </Link>
            </label>
            <br />
            <label>
              <div class="ui checkbox">
                <input type="checkbox" name="example" />
                <label>
                  ยอมรับเงื่อนไขและข้อตกลงในการใช้บริการ
                </label>
              </div>
            </label>
          </Row>
          <br />
          <Row>
            <Col span={6} />
            <Col span={6} />
            <Col span={6} />
            <Col span={6}>
            <div class="ui submit button"
                Link
                href="../StateLoaner.js">
                Create loan
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}
export default LoanCondition
