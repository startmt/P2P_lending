import { addBankForRecieveMoney } from '../../api/omise'
import { status400, status200 } from '../../utils/status'
import { addBank, getBankByUsername } from '../../crud/bank'

export const addBankController = async (req, res) => {
  let response = null
  try {
    const { name, bank_code, number } = req.body
    const username = req.authInfo.username
    response = await addBankForRecieveMoney(username, name, bank_code, number)
    console.log(response.data.id)
    if (response.status == 200)
      response = await addBank(username, number, name, response.data.id)
    if (response.status == 200) return status200(res, response.data)
    return status400(res, response.message)
  } catch (error) {
    console.log(error)
    return status400(res)
  }
}

export const getBankController = async (req, res) => {
  const data = await getBankByUsername(req.authInfo.username, req.query.state)
  return status200(res, data)
}
