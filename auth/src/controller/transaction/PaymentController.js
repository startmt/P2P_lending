import { status400, status200 } from '../../utils/status'
import createPaymentURL from '../../service/omise/createPaymentURL'
export default async (req, res) => {
  try {
    // const usename = req.authInfo.username
    // const lendingId = req.body.lendingId
    // const bankName = req.body.bankName
    const bankName = 'internet_banking_bay'
    const price = 100000
    const url = await createPaymentURL(price, bankName)
    status200(res, { url: url.data.authorize_uri })
  } catch (e) {
    status400(res, 'Error to create')
  }
}
