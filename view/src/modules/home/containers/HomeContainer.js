import React, { Fragment } from 'react'
import './styles.scss'
import { Typography } from 'antd'
import Banner from '~/components/Banner/Banner'
const { Title, Paragraph } = Typography
const HomeContainer = (props) => {
  return (
    <Fragment>
      <Banner
        title="Peer To Peer Lending System"
        description="Peer To Peer Lending System
              คือผู้ดำเนินการเพื่อเชื่อมโยงผู้ประกอบการและนักลงทุนเข้าด้วยกัน
              ในลักษณะที่ไม่ใช่ธนาคาร"
      />
      <section>
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
