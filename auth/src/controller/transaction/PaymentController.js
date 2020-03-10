import { status400, status200 } from '../../utils/status'
import createPaymentURL from '../../service/omise/createPaymentURL'
export default async (req, res) => {
  try {
    const usename = req.authInfo.username
    const requestId = req.body.requestId
    const bankName = req.body.bankName
    // const bankName = 'internet_banking_bay'
    const amount = 10000000
    const url = await createPaymentURL(amount, bankName)
    status200(res, { url: url.data.authorize_uri })
  } catch (e) {
    status400(res, 'Error to create')
  }
}
