import { addBankForRecieveMoney } from '../../api/omise'
import { status400, status200 } from '../../utils/status'
import { addBank } from '../../crud/bank'

export default async (req, res) => {
  let response = null
  try {
    const { name, bank_code, number } = req.body
    const username = req.authInfo.username
    response = await addBankForRecieveMoney(username, name, bank_code, number)
    if (response.status == 200) response = await addBank(username, number, name)
    if (response.status == 200) status200(res, response.data)
    status400(res, response.message)
  } catch (error) {
    console.log(error)
    status400(res)
  }
}
