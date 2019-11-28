import React from 'react'
import BorrowerFrom from '~/components/BorrowerFrom'
import { Form, Message } from 'semantic-ui-react'
const BorrowerFromContainer = (props) => {
  return (
    <section className="section">
      <div className="container">
        <Row>
          <Col span="24">
            <form class="ui form">
              <h4 class="ui dividing header">
                ข้อมูลผู้ทำรายการกู้สินเชื่อ
              </h4>
              ระบุข้อมูลเฉพาะของผู้ทำรายการกู้สินเชื่อ
              <div class="ui small form">

              <div class="field">
                  <label>Name Title (คำนำหน้าชื่อ) </label>
                  <div class="ui selection dropdown">
                    <input type="hidden" name="gender" />
                    <i class="dropdown icon"></i>
                    <div class="default text">Name Title (คำนำหน้าชื่อ) </div>
                    <div class="menu">
                      <div class="item" data-value="1">
                        Mr. (นาย)
                      </div>
                      <div class="item" data-value="0">
                        Miss (นางสาว)
                      </div>
                      <div class="item" data-value="0">
                        Mrs. (นาง)
                      </div>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label>First Name (ชื่อจริง)</label>
                  <input
                    placeholder="First Name (ชื่อจริง)"
                    type="text"
                  />
                </div>

                <div class="field">
                  <label>Last Name (นามสกุล)</label>
                  <input
                    placeholder="Last Name (นามสกุล)"
                    type="text"
                  />
                </div>

                <div class="field">
                  <label>ID Card Number (เลขบัตรประชาชน)</label>
                  <input
                    placeholder="ID Card Number (เลขบัตรประชาชน)"
                    type="number"
                  />
                </div>

                <div class="field">
                  <label>ID Card Number (เลขบัตรประชาชน)</label>
                  <input
                    placeholder="ID Card Number (เลขบัตรประชาชน)"
                    type="number"
                  />
                </div>

                <div class="field">
                  <label>Phone number (เบอร์โทรศัพท์มือถือ)</label>
                  <input
                    placeholder="Phone number (เบอร์โทรศัพท์มือถือ)"
                    type="number"
                  />
                </div>

                <div class="field">
                  <label>E-mail</label>
                  <input
                    placeholder="E-mail"
                    type="number"
                  />
                </div>

                <div class="ui submit button">Submit</div>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </section>
  )
}
export default BorrowerFromContainer
