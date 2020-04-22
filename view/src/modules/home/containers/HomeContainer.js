import React, { Fragment } from 'react'
import Banner from '~/components/Banner/Banner'
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
    </Fragment>
  )
}
export default HomeContainer
