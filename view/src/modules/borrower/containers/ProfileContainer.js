import React, { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Empty,
  Card,
  Button,
  Descriptions,
} from 'antd'
import ProfileCard from '~/components/ProfileCard'
import { connect } from 'react-redux'
import { authSelector } from '~/modules/authentication/selectors'
import { getQrcode } from '~/helpers/scbEasy'
import VerifySCBCard from '~/components/VerifySCBCard'
import { createStructuredSelector } from 'reselect'
import { bankAction } from '../actions'
import {
  getHeaderFromOtp,
  checkConfirmData,
} from '~/helpers/scbEasy'
import UserBankList from '../../../components/UserBankList/UserBankList'
import { bindActionCreators } from 'redux'
import AddBankModal from '../../../components/AddBankModal/AddBankModal'
const ProfileContainer = ({
  username,
  isIdentify,
  isConnectScb,
  handleOpenAddBankModal,
}) => {
  const [qrCode, setQrcode] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  useEffect(() => {
    if (isConnectScb === true) setCurrentStep(2)
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
  const handleConfirm = async (data) => {
    const status = await checkConfirmData(data)
    if (status) {
      window.location.replace('/verify/confirm')
    }
  }
  const handleOtp = async (data) => {
    const status = await getHeaderFromOtp(data)
    if (status) {
      next()
    }
  }

  return (
    <section className="section">
      <div className="container">
        <Row gutter={[0, 7]}>
          <Col span={24}>
            {isIdentify == true ? (
              <ProfileCard />
            ) : (
              <VerifySCBCard
                step={currentStep}
                next={next}
                qrCode={qrCode}
                prev={prev}
                handleOtp={handleOtp}
                handleConfirm={handleConfirm}
              />
            )}
          </Col>
        </Row>
        <Row gutter={[7, 7]}>
          <Col span={24}>
            <UserBankList />
          </Col>
        </Row>
        <Card style={{ height: 200 }}>
          <Empty
            image="https://cdn4.iconfinder.com/data/icons/credit-card-payments/48/79-512.png"
            imageStyle={{
              height: 60,
            }}
            description={<span>เพิ่มบัญชีรับเงิน</span>}>
            <Button
              type="primary"
              onClick={handleOpenAddBankModal}>
              Create Now
            </Button>
          </Empty>
          <AddBankModal />
        </Card>
      </div>
    </section>
  )
}

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    username: authSelector.getUsername,
    isIdentify: authSelector.isIdentify,
    isConnectScb: authSelector.isConnectScb,
  })(state, props)

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleOpenAddBankModal: bankAction.openAddBankModal,
    },
    dispatch,
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer)
