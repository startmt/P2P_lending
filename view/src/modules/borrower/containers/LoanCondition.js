import React from 'react'
// import LoanConditionFrom from '../components/LoanCondition'
import { From, TextArea } from 'semantic-ui-react'
import { Row, Col } from 'antd'
import Link from 'next/link'

const LoanCondition = (props) => {
  return (
    <section className="section">
      <div className="Container">
        <Row>
          <h4>
            อนุญาติการเข้าถึงข้อมูลส่วนตัวเพื่อใช้ในการขอสินเชื่อ
          </h4>
          <h5>
            ข้อกำหนดในการขอสินเชื่อ ต้องได้รับการยินยอม
            National Credit Bureau (NCB) และ
            ยอมรับข้อกำหนดและเงื่อนไข (T&C)
          </h5>
          <label>
            <Link href="https://www.scb.co.th/th/personal-banking/loans/personal-loans/speedy-loan.html">
              <a>อ่านข้อกำหนดในการขอกู้สินเชื่อ</a>
            </Link>
          </label>
        </Row>
        <Row>
          <div class="field">
            <label>คุณต้องการขอสินเชื่อเท่าไหร่</label>
          </div>
        </Row>
        <Row>
          <div class="field">
            <Col span={6}>
              <label>
                วงเงินอนุมัติ 20,000 – 2,000,000 บาท
              </label>
            </Col>
            <Col span={6}>
              <input
                placeholder="กรอกจำนวนเงินที่ต้องการกู้"
                type="number"
              />
            </Col>
            <label>
              *หมายเหตุ
              จำนวนผ่อนชำระเบื้องต้นคิดจากอัตราดอกเบี้ยสูงสุด
              15% ต่อปี สามารถทราบอัตราดอกเบี้ยพิเศษเฉพาะ
              หลังจากส่งเอกสาร
            </label>
            <label>และได้รับการประเมินสินเชื่อ</label>
          </div>
        </Row>
        <Row>
          <Col span={6}>
            <label>จุดประสงต์ในการกู้</label>
          </Col>
          <Col span={6}>
            <select class="ui dropdown">
              <option value="">Gender</option>
              <option value="0">เงินทุนหมุนเวียน</option>
              <option value="1">ปรับโครงสร้างหนี้</option>
              <option value="2">ขยายกิจการ</option>
              <option value="3">ลงทุนในโครงการใหม่</option>
              <option value="4">อื่นๆ</option>
            </select>
          </Col>
        </Row>
        <div class="ui form">
          <div class="field">
            <label>รายละเอียดของจุดประสงค์ในการกู้</label>
            <textarea rows="2"></textarea>
          </div>
        </div>
        <div class="ui submit button" Link href="../StateLoaner.js">Submit</div>
      </div>
    </section>
  )
}
export default LoanCondition