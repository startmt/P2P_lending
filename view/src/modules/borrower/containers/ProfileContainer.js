import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Empty,
  Card,
  Button,
  Descriptions,
} from 'antd'
import Link from 'next/link'
import ProfileCard from '~/components/ProfileCard'
import Route from 'next/router'
import { connect } from 'react-redux'
import { authSelector } from '~/modules/authentication/selectors'
import { getQrcode } from '~/helpers/scbEasy'
import VerifySCBCard from '~/components/VerifySCBCard'
import { createStructuredSelector } from 'reselect'
import {
  getHeaderFromOtp,
  checkConfirmData,
} from '~/helpers/scbEasy'

const ProfileContainer = ({ username, isIdentify }) => {
  const [qrCode, setQrcode] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const [otp, setOtp] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [citizenId, setCitizenId] = useState('')
  useEffect(() => {
    if (isIdentify === false)
      getQrcode(username).then((res) =>
        setQrcode(res.data.data.callbackUrl),
      )
  })
  const next = () => {
    setCurrentStep(currentStep + 1)
  }
  const prev = () => {
    setCurrentStep(currentStep - 1)
  }
  const handleConfirm = async () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      citizenId: citizenId,
    }
    const status = await checkConfirmData(data)
    if (status) {
      Route.push('/verify/confirm')
    }
  }
  const handleOtp = async () => {
    const data = {
      otp: otp,
    }
    const status = await getHeaderFromOtp(data)
    if (status) {
      next()
    }
  }

  return (
    <section className="section">
      <div className="container">
        <Row gutter={[0, 7]}>
          <Col span={18}>
            {/* <ProfileCard/> */}
            <VerifySCBCard
              step={currentStep}
              next={next}
              qrCode={qrCode}
              prev={prev}
              handleOtp={handleOtp}
              otpCode={otp}
              firstname={firstname}
              lastname={lastname}
              citizenId={citizenId}
              setOtp={setOtp}
              setFirstname={setFirstname}
              setLastname={setLastname}
              setCitizenId={setCitizenId}
              handleConfirm={handleConfirm}
            />
          </Col>
        </Row>
        <Row gutter={[7, 7]}>
          <Col span={9}>
            <Card style={{ height: 200 }}>
              <Descriptions title="บัญชี">
                <Descriptions.Item label="ชื่อบัญชี">
                  ชาญศิลป์ ทองคำ
                </Descriptions.Item>
                <Descriptions.Item label="หมายเลขบัญชี">
                  0910110111
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
          <Col span={9}>
            <Card style={{ height: 200 }}>
              <Empty
                image="https://cdn4.iconfinder.com/data/icons/credit-card-payments/48/79-512.png"
                imageStyle={{
                  height: 60,
                }}
                description={<span>เพิ่มบัตรเดบิต</span>}>
                <Button type="primary">Create Now</Button>
              </Empty>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    username: authSelector.getUsername,
    isIdentify: authSelector.isIdentify,
  })(state, props)
export default connect(
  mapStateToProps,
  null,
)(ProfileContainer)
