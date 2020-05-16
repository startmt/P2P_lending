import React from 'react'
import { connect } from 'react-redux'
import { Skeleton, Card, Row, Col } from 'antd'
import UserBankListItem from './UserBankListItem'
const UserBankList = ({ bankList, loading }) => {
  return (
    <Row gutter={[7, 7]}>
      {bankList.map((bankData) => (
        <Col span={12}>
          <Card style={{ height: 200 }}>
            {loading ? (
              <Skeleton loading={true} />
            ) : (
              <UserBankListItem
                name={bankData.get('name')}
                bankAccount={bankData.get('bankAccount')}
                state={bankData.get('state')}
              />
            )}
          </Card>
        </Col>
      ))}
    </Row>
  )
}

const mapStateToProps = (state, props) => ({
  bankList: state.getIn(['lending', 'bank', 'data']) || [],
  loading: state.getIn(['lending', 'bank', 'loading']),
})
const mapDispatchToProps = null
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserBankList)
