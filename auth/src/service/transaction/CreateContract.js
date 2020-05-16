import moment from 'moment'
import { createLendingContract } from '../blockchain/lending'
export default async (request, userContract) => {
  const currentDate = moment().add(30, 'days')
  const contract = []
  const { loanTenor, amount, interestRate, id } = request
  const net = Math.ceil((amount + (amount * interestRate) / 100) / loanTenor)
  contract.push({
    date: currentDate.unix() * 1000,
  })

  for (let i = 1; i < loanTenor; i++) {
    let date = currentDate.add(30, 'days').unix() * 1000
    contract.push({ date })
  }
  const data = {
    contract,
    amount: net,
    userContract,
  }
  const response = await createLendingContract(id, data)
  return response
}
