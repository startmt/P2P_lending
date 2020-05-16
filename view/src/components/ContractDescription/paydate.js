import React, { Fragment } from 'react'
import { Table, Card, Tag } from 'antd'
import moment from 'moment'
const UserDescription = ({ loading, payList }) => {
  const columns = [
    {
      title: 'วันที่ต้องชำระเงิน',
      dataIndex: 'date',
      key: 'date',
      render: (text, record) => {
        return (
          <Fragment>
            {moment(Number(record.date)).format(
              'DD/MM/YYYY',
            )}
          </Fragment>
        )
      },
    },
    {
      title: 'จำนวนเงิน',
      dataIndex: 'amount',
      key: 'amount',
      render: (text, record) => {
        return <Fragment>{record.amount} บาท</Fragment>
      },
    },
    {
      title: 'สถานะ',
      dataIndex: 'isPaid',
      key: 'isPaid',
      render: (text, record) => {
        if (record.isPaid) {
          return <Tag color="green">จ่ายแล้ว</Tag>
        }
        return <Tag color="red">ยังไม่จ่าย</Tag>
      },
    },
    {
      title: 'ref',
      dataIndex: 'evidence',
      key: 'evidence',
    },
  ]
  return (
    <Card title="สัญญาการชำระเงิน">
      <Table
        loading={loading}
        dataSource={payList}
        columns={columns}
        pagination={false}
      />
    </Card>
  )
}

export default UserDescription
