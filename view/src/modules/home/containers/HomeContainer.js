import React, { Fragment } from 'react'
import { Typography } from 'antd'
import Banner from '~/components/Banner/Banner'
const { Title, Paragraph } = Typography
const HomeContainer = (props) => {
  return (
    <Fragment>
      <Banner
        background="https://www.altran.com/as-content/uploads/sites/7/2017/05/5-0_finance_1600.jpg"
        title="Peer To Peer Lending System"
        description="Peer To Peer Lending System
              คือผู้ดำเนินการเพื่อเชื่อมโยงผู้ประกอบการและนักลงทุนเข้าด้วยกัน
              ในลักษณะที่ไม่ใช่ธนาคาร"
      />
      <section className="section">
        <div className="container">
          <Title className="text-center">
            Peer To Peer Lending System
          </Title>
          <Paragraph className="text-center">
            Peer To Peer Lending System
            คือผู้ดำเนินการเพื่อเชื่อมโยงผู้ประกอบการและนักลงทุนเข้าด้วยกัน
            ในลักษณะที่ไม่ใช่ธนาคาร
          </Paragraph>
        </div>
      </section>
    </Fragment>
  )
}
export default HomeContainer
