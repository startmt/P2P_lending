import React, { Fragment } from 'react'
import './styles.scss'
import { Typography } from 'antd'
const { Title, Paragraph  } = Typography
const HomeContainer = (props) => {
  return (
    <Fragment>
      <div className="home-banner" />
      <section>
        <div className="container">
          <Title className="text-center">
            Peer To Peer Lending System
          </Title>
          <Paragraph  className="text-center">Peer To Peer Lending System คือผู้ดำเนินการเพื่อเชื่อมโยงผู้ประกอบการและนักลงทุนเข้าด้วยกัน ในลักษณะที่ไม่ใช่ธนาคาร</Paragraph >
        </div>
      </section>
    </Fragment>
  )
}
export default HomeContainer
