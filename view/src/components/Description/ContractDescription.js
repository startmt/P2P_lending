import React from 'react'
import { Descriptions } from 'antd'
import { connect } from 'react-redux'
const UserDescription = ({
  title,
  loading,
  contractData,
  interestData,
}) => {
  console.log('loading', loading)
  const { data } = contractData
  console.log(data)
  return (
    <Descriptions
      column={{
        xxl: 2,
        xl: 2,
        lg: 2,
        md: 2,
        sm: 1,
        xs: 1,
      }}
      title={title}>
      <Descriptions.Item label="หัวข้อ">
        {`${data.title}`}
      </Descriptions.Item>
      <Descriptions.Item label="ดอกเบี้ย">
        {`${data.interestRate} %`}
      </Descriptions.Item>
      <Descriptions.Item label="ค่าธรรมเนียม">
        {`${interestData.fee} %`}
      </Descriptions.Item>
      <Descriptions.Item label="จำนวนงวด">
        {`${data.loanTenor}`}
      </Descriptions.Item>
      <Descriptions.Item label="จำนวนเงิน">
        {`${data.amount} บาท`}
      </Descriptions.Item>
      <Descriptions.Item label="จำนวนเงินที่ท่านจะได้รับ">
        {`${data.amount +
          (data.amount *
            (data.interestRate - interestData.fee)) /
            100} บาท`}
      </Descriptions.Item>
      <Descriptions.Item span={2} label="รายละเอียด">
        {`${data.description}`}
      </Descriptions.Item>
    </Descriptions>
  )
}
const mapStateToProps = (state) => ({
  interestData: state.getIn(['page', 'interest']).toJS(),
})
const mapDispatchToProps = null
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDescription)
