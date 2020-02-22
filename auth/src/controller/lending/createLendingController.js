import { status400, status200 } from '../../utils/status'
import { createLending } from '../../service/lending/borrowerService'
import { uploadFile } from '../../utils/managefile'

export default async (req, res) => {
  try {
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
      const prefix = `${req.authInfo.username}-${query.data.id}`
      const data = {
        id: query.data.id,
        prefix,
        files: req.files,
      }
      await uploadFile(data)
      status200(res, query)
    }
    status400(res, query.message)
  } catch (e) {
    console.log(e)
    status400(res)
  }
}
