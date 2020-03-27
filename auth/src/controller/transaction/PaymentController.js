import { status400, status200 } from '../../utils/status'
import createPaymentURL from '../../service/omise/createPaymentURL'
export default async (req, res) => {
  try {
    const username = req.authInfo.username
    const requestId = req.body.requestId
    const bankName = req.body.bankName
    const amount = req.body.amount
    const userData = {
      username,
      requestId,
    }
    const url = await createPaymentURL(amount, bankName, userData)
    status200(res, { url: url.data.authorize_uri })
  } catch (e) {
    console.log(e)
    status400(res, 'Error to create')
  }
}
