import moment from 'moment'
import { createLendingContract } from '../blockchain/lending'
export default async (request, userContract) => {
  const currentDate = moment()
  const contract = []
  const { loanTenor, amount, interestRate } = request
  const net = Math.ceil((amount + (amount * interestRate) / 100) / loanTenor)
  contract.push({
    date: currentDate.unix(),
    amount: net,
    isPaid: false,
    evidence: '',
  })

  for (let i = 1; i < loanTenor; i++) {
    let date = currentDate.add(30, 'days').unix()
    contract.push({ date, amount: net, isPaid: false, evidence: '' })
  }
  const data = {
    contract,
    userContract,
  }
  const response = await createLendingContract(data)

  return response
}
