import { Input, Button, Row, Col } from 'antd'
import md5 from 'md5'
import Link from 'next/link'
import './style.less'
import paymentforloan from '../../../../pages/borrower/paymentforloan'

const MicrodataLink = ({ href, children, ...rest }) => (
  <Link href={href}>
    <a {...rest}>{children}</a>
  </Link>
)

const PaymentForLoan = () => {
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
        Transaction id : {md5('4218 1589 1564 1883')}
      </div>
      <br />
      <div className="information">Amount : 10,000</div>
      <br />
      <div className="information">
        Type Card : Visa (SCB)
      </div>
      <br />
      <div className="information">
        Card Number : 4218 1589 1564 1883
      </div>
      <br />
      <Row>
        <Col span="8" />
        <Col span="8">
          <div className="information">
            CVV :
            <Input
              className="cvv"
              placeholder="cvv"
              type="text"
              size="3"
              maxLength="3"
            />
          </div>
        </Col>
        <Col span="8" />
      </Row>
      <br />
      <br />
      <Row>
        <Col span="8"></Col>
        <Col span="8">
          <div className="buttonSpace">
            <div className="AcceptButtonMargin">
            <Link href="/borrower/paymentsuccess/[transactionId]" as={`/borrower/paymentsuccess/${md5('4218 1589 1564 1883')}`}>
              <Button type="primary">Accept</Button>
            </Link>           
            </div>
            <div className="CancelButtonMargin">
              <Link href="/borrower/listofrequestloan">
                <Button type="primary">Cancel</Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col span="8"></Col>
      </Row>
    </div>
  )
}

export default PaymentForLoan
