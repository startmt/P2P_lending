import { status400, status200 } from '../../utils/status'
import { createLending } from '../../service/lending/borrowerService'
export default async (req, res) => {
  try {
    console.log(req.files)
    // const nsbFile = req.files
    const query = await createLending(req.authInfo.username, {
      category: req.body.category,
      title: req.body.title,
      state: 'INIT',
      amount: req.body.amount,
      interestRate: 8,
      loanTenor: req.body.loanTenor,
      description: req.body.description,
    })
    if (query.status === 200) {
      status200(res, query)
    }
    status400(res, query.message)
  } catch (e) {
    status400(res)
  }
}
