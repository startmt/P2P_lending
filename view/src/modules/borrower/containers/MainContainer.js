import React from 'react'
import DashboardCard from '../components/CardDashboard'
import Link from 'next/link'
import { connect } from 'react-redux'
const MainContainer = (props) => {
  const {
    selfLendingListSize,
    selfLendingListLoading,
    isUserVerified,
    userFromContract,
    userDetail,
  } = props
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12 p-2">
            <DashboardCard
              title="จำนวนใบคำร้องสินเชื่อ"
              value={`${selfLendingListSize} รายการ`}
              icon="file-text"
              color="white"
              bgcolor="#2DCC70"
              loading={selfLendingListLoading}
              footer={
                <Link href="#">
                  <a>ดูเพิ่มเติม </a>
                </Link>
              }
            />
          </div>

          <div className="col-md-6 col-sm-12 p-2">
            <DashboardCard
              title="อัตราดอกเบี้ยการขอสินเชื่อ"
              value="8%"
              icon="dollar"
              color="white"
              bgcolor="#EFB44E"
              footer="อัตราดอกเบี้ยขึ้นอยู่กับการคืนเงินได้ตรงตามเวลาของท่าน"
            />
          </div>
          {isUserVerified ? (
            <div className="col-md-6 col-sm-12 p-2">
              <DashboardCard
                title={`คะแนนความประพฤติ (${userDetail.get(
                  'firstName',
                )} ${userDetail.get('lastName')})`}
                value={`${userFromContract.getIn([
                  'user',
                  'score',
                ])} คะแนน`}
                icon="plus"
                color="white"
                loading={userFromContract.get('loading')}
                bgcolor="#23B7E5"
                footer="คะแนนความประพฤติของคุณจะส่งผลต่อดอกเบี้ยที่คุณต้องจ่าย / ได้รับ"
              />
            </div>
          ) : (
            <div className="col-md-6 col-sm-12 p-2">
              <DashboardCard
                title="สร้างคำร้องสินเชื่อใหม่"
                value="ใบคำร้องสินเชื่อ"
                icon="plus"
                color="white"
                bgcolor="#23B7E5"
                footer="อัตราดอกเบี้ยขึ้นอยู่กับการคืนเงินได้ตรงตามเวลาของท่าน"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = (state) => ({
  selfLendingListSize: state.getIn([
    'lending',
    'mylending',
    'data',
  ]).size,
  selfLendingListLoading: state.getIn([
    'lending',
    'mylending',
    'loading',
  ]),
  isUserVerified: state.getIn([
    'authentication',
    'auth',
    'isIdentify',
  ]),
  userDetail:
    state.getIn(['authentication', 'auth', 'userDetail']) ||
    undefined,
  userFromContract:
    state.getIn(['authentication', 'auth', 'contract']) ||
    undefined,
})
export default connect(
  mapStateToProps,
  null,
)(MainContainer)
