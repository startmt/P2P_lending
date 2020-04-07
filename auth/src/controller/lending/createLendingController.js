import { status400, status200 } from '../../utils/status'
import { createLending } from '../../service/lending/borrowerService'
import { uploadFile } from '../../utils/managefile'
import { createLog } from '../../crud/requestlog'
import interestContract from '../../service/blockchain/interest'

export default async (req, res) => {
  try {
    const interest = await interestContract(
      '0xd0ee9F1B0580897FdB42e3fD14361D89441Cf938',
    )
      .methods.interest()
      .call()
    const query = await createLending(req.authInfo.username, {
      category: req.body.category,
      title: req.body.title,
      state: 'INIT',
      amount: req.body.amount,
      interestRate: Number(interest['allInterest']),
      loanTenor: req.body.loanTenor,
      description: req.body.description,
    })
    await createLog(`create lending by ${req.authInfo.username}`, query.data.id)
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
