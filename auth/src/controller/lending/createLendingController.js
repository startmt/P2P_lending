import { status400, status200 } from '../../utils/status'
import { createLending } from '../../service/lending/borrowerService'
export default async (req, res) => {
  try {
    const query = await createLending(req.authInfo.username, {
      category: 'CAR',
      title: 'hello',
      state: 'INIT',
      amount: 25000,
      interestRate: 2.5,
      loanTenor: 12,
      description: 'lorem',
    })
    if (query.status === 200) {
      return status200(res, query)
    }
    return status400(res, query.message)
  } catch (e) {
    return status400(res)
  }
}
