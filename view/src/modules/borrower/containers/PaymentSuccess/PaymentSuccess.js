import { Input, Button, Row, Col } from 'antd'
import Link from 'next/link'
import './style.less'
import paymentforloan from '../../../../pages/borrower/paymentforloan'

const PaymentSuccess = () => {
  return (
    <div className="paymentFrom">
      <div className="imgIconPayment">
        <img
          src="https://image.flaticon.com/icons/png/512/1086/1086741.png"
          width="150"
          height="150"
        />
      </div>
      <br />
      <div className="paymentTopic">
        <h3>Payment</h3>
      </div>
      <br />
      <div className="information">
        Transaction id : 24545099
      </div>
      <br />
      <div className="information">Amount : 10,000</div>
      <br />
      <div className="imgIconPaymentSuccess">
        <img
          src="https://image.flaticon.com/icons/png/512/179/179372.png"
          width="200"
          height="200"
        />
      </div>
      <br />
      <div className="information">Success, please wait a second for redirect</div>
      <br />
    </div>
  )
}

export default PaymentSuccess
