import React from 'react'
import DashboardCard from '../components/CardDashboard'
import Link from 'next/link'
const MainContainer = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12 p-2">
            <DashboardCard
              title="จำนวนใบคำร้องสินเชื่อ"
              value="3 รายการ"
              icon="file-text"
              color="white"
              bgcolor="#2DCC70"
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
        </div>
      </div>
    </section>
  )
}
export default MainContainer
